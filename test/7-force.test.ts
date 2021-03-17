import { accounts, contract } from '@openzeppelin/test-environment';
const { balance, ether } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Force = contract.fromArtifact('Force');
const ForceAttack = contract.fromArtifact('ForceAttack');
let force: any;
let forceAttack: any;

beforeEach(async () => {
    force = await Force.new(owner, { from: owner });
    forceAttack = await ForceAttack.new(owner, { from: attacker });
});

it('Force -> make the balance of the contract greater than zero', async () => {
    const balanceBefore = await balance.current(force.address);

    // Call a selfdestruct contract to transfer ether to the victim
    await forceAttack.attack(force.address, { value: ether('5'), from: attacker });

    const balanceAfter = await balance.current(force.address);

    assert(balanceBefore.toString() === '0');
    assert(balanceAfter.toString() === ether('5').toString());
});

