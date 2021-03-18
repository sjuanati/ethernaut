pragma solidity ^0.6.0;

import '../13-gatekeeper-one/GatekeeperOne.sol';

contract GatekeeperOneAttack {
    GatekeeperOne gk;

    function attack(address target) external {
        gk = GatekeeperOne(target);
        bytes8 tmp = 'hallo';
        gk.enter(tmp);
    }
}