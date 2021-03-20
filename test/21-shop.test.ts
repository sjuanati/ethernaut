import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Shop = contract.fromArtifact('Shop');
const ShopAttack = contract.fromArtifact('ShopAttack');
let shop: any;
let shopAttack: any;

beforeEach(async () => {
    shop = await Shop.new({ from: owner });
    shopAttack = await ShopAttack.new({ from: attacker })
});

it.only('Shop -> get the item from the shop for less than the price asked', async () => {
    const priceBefore = await shop.price.call();

    await shopAttack.attack(shop.address, { from: attacker });

    const priceAfter = await shop.price.call();

    assert(priceBefore.gt(priceAfter));
});
