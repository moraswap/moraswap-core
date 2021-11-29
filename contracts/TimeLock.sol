// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity =0.6.12;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract Timelock {
    using SafeMath for uint;
    using SafeERC20 for IERC20;

    IERC20 immutable public token;
    address immutable public beneficiary;
    uint immutable public amount;
    uint immutable public nextReleaseTime;
    uint public lastReleaseTime;

    constructor (IERC20 _token, address _beneficiary, uint _amount, uint _nextReleaseTime) public {
        token = _token;
        beneficiary = _beneficiary;
        amount = _amount;
        nextReleaseTime = _nextReleaseTime;
    }

    function release() public virtual {
        require(block.timestamp >= lastReleaseTime.add(nextReleaseTime), "NOT NOW");

        uint balance = token.balanceOf(address(this));
        require(balance > amount, "Not enough tokens to release");

        token.safeTransfer(beneficiary, amount);
        lastReleaseTime = lastReleaseTime.add(nextReleaseTime);
    }
}