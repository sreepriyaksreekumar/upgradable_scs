
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./UpgradableContract_v0.sol";

contract BoxV2 is Box {

    // Increments the stored value by 1
    function increment() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}