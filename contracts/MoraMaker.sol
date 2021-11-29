// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;
import "../libraries/BoringMath.sol";
import "../libraries/BoringERC20.sol";

import "../interfaces/IMoraSwapERC20.sol";
import "../interfaces/IMoraSwapPair.sol";
import "../interfaces/IMoraSwapFactory.sol";

import "./BoringOwnable.sol";

contract MoraMaker is BoringOwnable {
    using BoringMath for uint256;
    using BoringERC20 for IERC20;

    IMoraSwapFactory public immutable factory;
    // 
    address public immutable arom;
    // 
    address private immutable mora;
    // 
    address private immutable weth;
    // 

    mapping(address => address) internal _bridges;

    event LogBridgeSet(address indexed token, address indexed bridge);
    event LogConvertSingleToken(
        address indexed server,
        address indexed token,
        uint256 amount,
        uint256 amountMORA
    );
    event LogConvert(
        address indexed server,
        address indexed token0,
        address indexed token1,
        uint256 amount0,
        uint256 amount1,
        uint256 amountMORA
    );

    constructor(
        address _factory,
        address _arom,
        address _mora,
        address _weth
    ) public {
        factory = IMoraSwapFactory(_factory);
        arom = _arom;
        mora = _mora;
        weth = _weth;
    }

    receive() external payable {
        assert(msg.sender == weth); // only accept ETH via fallback from the WETH contract
    }

    function bridgeFor(address token) public view returns (address bridge) {
        bridge = _bridges[token];
        if (bridge == address(0)) {
            bridge = weth;
        }
    }

    function setBridge(address token, address bridge) external onlyOwner {
        require(
            token != mora && token != weth && token != bridge,
            "MoraMaker: Invalid bridge"
        );

        _bridges[token] = bridge;
        emit LogBridgeSet(token, bridge);
    }

    function convertSingleToken(address token) external {
        uint256 amount = IERC20(token).balanceOf(address(this));
        emit LogConvertSingleToken(
            msg.sender,
            token,
            amount,
            _toMORA(token, amount)
        );
    }

    function convertMultipleSingleToken(
        address[] calldata token
    ) external {
        uint256 len = token.length;
        for (uint256 i = 0; i < len; i++) {
            uint256 amount = IERC20(token[i]).balanceOf(address(this));
            emit LogConvertSingleToken(
                msg.sender,
                token[i],
                amount,
                _toMORA(token[i], amount)
            );
        }
    }

    function convert(address token0, address token1) external {
        _convert(token0, token1);
    }

    function convertMultiple(
        address[] calldata token0,
        address[] calldata token1
    ) external {
        uint256 len = token0.length;
        for (uint256 i = 0; i < len; i++) {
            _convert(token0[i], token1[i]);
        }
    }

    function _convert(address token0, address token1) internal {
        IMoraSwapPair pair = IMoraSwapPair(factory.getPair(token0, token1));
        require(address(pair) != address(0), "MoraMaker: Invalid pair");
        IERC20(address(pair)).safeTransfer(
            address(pair),
            pair.balanceOf(address(this))
        );
        (uint256 amount0, uint256 amount1) = pair.burn(address(this));
        if (token0 != pair.token0()) {
            (amount0, amount1) = (amount1, amount0);
        }
        emit LogConvert(
            msg.sender,
            token0,
            token1,
            amount0,
            amount1,
            _convertStep(token0, token1, amount0, amount1)
        );
    }

    function _convertStep(address token0, address token1, uint256 amount0, uint256 amount1) internal returns(uint256 moraOut) {
        if (token0 == token1) {
            uint256 amount = amount0.add(amount1);
            if (token0 == mora) {
                IERC20(mora).safeTransfer(arom, amount);
                moraOut = amount;
            } else if (token0 == weth) {
                moraOut = _toMORA(weth, amount);
            } else {
                address bridge = bridgeFor(token0);
                amount = _swap(token0, bridge, amount, address(this));
                moraOut = _convertStep(bridge, bridge, amount, 0);
            }
        } else if (token0 == mora) { // eg. MORA - NEON
            IERC20(mora).safeTransfer(arom, amount0);
            moraOut = _toMORA(token1, amount1).add(amount0);
        } else if (token1 == mora) { // eg. USDC- MORA
            IERC20(mora).safeTransfer(arom, amount1);
            moraOut = _toMORA(token0, amount0).add(amount1);
        } else if (token0 == weth) { // eg. NEON - USDC
            moraOut = _toMORA(weth, _swap(token1, weth, amount1, address(this)).add(amount0));
        } else if (token1 == weth) { // eg. USDC - NEON
            moraOut = _toMORA(weth, _swap(token0, weth, amount0, address(this)).add(amount1));
        } else { // eg. WSOL - USDC
            address bridge0 = bridgeFor(token0);
            address bridge1 = bridgeFor(token1);
            if (bridge0 == token1) { // eg. WSOL - USDC - and bridgeFor(WSOL) = USDC
                moraOut = _convertStep(bridge0, token1,
                    _swap(token0, bridge0, amount0, address(this)),
                    amount1
                );
            } else if (bridge1 == token0) { // eg. WBTC - SRM - and bridgeFor(SRM) = WBTC
                moraOut = _convertStep(token0, bridge1,
                    amount0,
                    _swap(token1, bridge1, amount1, address(this))
                );
            } else {
                moraOut = _convertStep(bridge0, bridge1, // eg. USDC - SRM - and bridgeFor(SRM) = WBTC
                    _swap(token0, bridge0, amount0, address(this)),
                    _swap(token1, bridge1, amount1, address(this))
                );
            }
        }
    }

    function _swap(address fromToken, address toToken, uint256 amountIn, address to) internal returns (uint256 amountOut) {
        IMoraSwapPair pair = IMoraSwapPair(factory.getPair(fromToken, toToken));
        require(address(pair) != address(0), "MoraMaker: Cannot convert");

        (uint256 reserve0, uint256 reserve1,) = pair.getReserves();
        uint256 amountInWithFee = amountIn.mul(998);
        if (fromToken == pair.token0()) {
            amountOut = amountIn.mul(998).mul(reserve1) / reserve0.mul(1000).add(amountInWithFee);
            IERC20(fromToken).safeTransfer(address(pair), amountIn);
            pair.swap(0, amountOut, to, new bytes(0));
        } else {
            amountOut = amountIn.mul(998).mul(reserve0) / reserve1.mul(1000).add(amountInWithFee);
            IERC20(fromToken).safeTransfer(address(pair), amountIn);
            pair.swap(amountOut, 0, to, new bytes(0));
        }
    }

    function _toMORA(address token, uint256 amountIn) internal returns(uint256 amountOut) {
        amountOut = _swap(token, mora, amountIn, arom);
    }
}