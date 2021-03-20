
pragma solidity ^0.6.0;

contract Denial {
    address public partner; // withdrawal partner - pay the gas, split the withdraw
    address payable public constant owner = address(0xA9E);

    function setWithdrawPartner(address _partner) public {
        partner = _partner;
    }

    // withdraw 1 eth to recipient and 1 eth to owner
    function withdraw() public {
        uint amountToSend = 1 ether;

        partner.call.value(amountToSend)("");
        assert(false);
        owner.transfer(amountToSend);

    }

    // allow deposit of funds
    fallback() external payable {}
}
