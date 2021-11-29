// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;

interface IMoraStake {
    event Deposit(address indexed user, uint indexed pid, uint amount);
    event Withdraw(address indexed user, uint indexed pid, uint amount);

    function poolLength() external view returns (uint);
    function addBonusMora(uint _amount) external;
    function deposit(uint _pid, uint _amount) external;
    function withdraw(uint _pid, uint _amount) external;
}