// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "../interfaces/IRewarder.sol";

contract Rewarder is IRewarder {
    using SafeMath for uint;
    using SafeERC20 for IERC20;

    IERC20 public immutable token;
    uint public immutable tokenPrecision;
    address public immutable masterChef;
    uint public rewardPerSecond;
    uint public accRewardPerShare;
    mapping(address => uint) public rewardDebt;

    constructor(
        IERC20 _token,
        uint _rewardPerSecond,
        address _masterChef,
        uint _tokenPrecision
    ) public {
        token = _token;
        rewardPerSecond = _rewardPerSecond;
        masterChef = _masterChef;
        tokenPrecision = _tokenPrecision == 0 ? 1e18 : _tokenPrecision;
    }

    modifier onlyMasterChef() {
        require(address(msg.sender) == masterChef, "Rewarder: Only MasterChef can excute");
        _;
    }

    function setRewardPerSecond(uint _rewardPerSecond, uint _multiplier, uint _lpSupply) external override onlyMasterChef {
        update(_multiplier, _lpSupply);
        rewardPerSecond = _rewardPerSecond;
    }

    function update(uint _multiplier, uint _lpSupply) internal {
        uint reward = _multiplier.mul(rewardPerSecond);
        accRewardPerShare = accRewardPerShare.add(reward.mul(tokenPrecision).div(_lpSupply));
    }

    function onReward(address _user, uint _amount, uint _multiplier, uint _lpSupply) external override onlyMasterChef {
        update(_multiplier, _lpSupply);

        uint curAccRewardPerShare = accRewardPerShare;
        uint tmpTokenPrecision = tokenPrecision;
        uint pending = _amount.mul(curAccRewardPerShare).div(tmpTokenPrecision).sub(rewardDebt[_user]);
        uint balance = token.balanceOf(address(this));

        if (pending > balance) {
            pending = balance;
        }

        rewardDebt[_user] = _amount.mul(curAccRewardPerShare).div(tmpTokenPrecision);
        token.safeTransfer(_user, pending);
    }

    function pendingReward(address _user, uint _amount, uint _multiplier, uint _lpSupply) external override view returns (uint) {
        uint reward = _multiplier.mul(rewardPerSecond);
        uint tmpTokenPrecision = tokenPrecision;
        uint tmpAccRewardPerShare = accRewardPerShare.add(reward.mul(tmpTokenPrecision).div(_lpSupply));
        uint pending = _amount.mul(tmpAccRewardPerShare).div(tmpTokenPrecision).sub(rewardDebt[_user]);

        uint balance = token.balanceOf(address(this));

        if (pending > balance) {
            pending = balance;
        }

        return pending;
    }
}