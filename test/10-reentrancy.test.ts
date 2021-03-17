import { accounts, contract } from '@openzeppelin/test-environment';
const { ether, balance } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Reentrance = contract.fromArtifact('Reentrance');
const ReentranceAttack = contract.fromArtifact('ReentranceAttack');
let reentrance: any;
let reentranceAttack: any;

beforeEach(async () => {
    reentrance = await Reentrance.new({ from: owner });
    reentranceAttack = await ReentranceAttack.new(reentrance.address, { from: attacker });
});

it('Reentrance -> steal all the funds', async () => {
    // Founder sends initial amount
    await reentrance.donate(owner, { from: owner, value: ether('5') });

    const balanceBefore = await balance.current(reentrance.address);

    // Launch reentrancy attack to drain all funds
    await reentranceAttack.attack({ from: attacker, value: ether('1') });

    const balanceAfter = await balance.current(reentrance.address);

    await reentranceAttack.withdraw({from: attacker});

    assert(balanceBefore.toString() === ether('5').toString(), 'initial balance');
    assert(balanceAfter.toString() === '0', 'final balance');
});

