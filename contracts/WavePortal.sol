// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal{
    uint totalWaves;

    constructor() {
        console.log("Hello World, I am a smart contract");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved Alexo!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves! Amazing!", totalWaves);
        return totalWaves;
    }
}