// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract HelloWorld {
  uint256 public value;
    event ValueChanged(uint256 oldValue, uint256 newValue);
    constructor(uint256 initialValue) {
        value = initialValue;
    }
    function updateValue(uint256 newValue) public {
        require(newValue != value, "New value must be different from the current value");
        uint256 oldValue = value;
        value = newValue;
        emit ValueChanged(oldValue, newValue);
    }
}
      