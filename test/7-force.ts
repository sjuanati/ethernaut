import { accounts, contract, web3 } from '@openzeppelin/test-environment';
const { balance, ether } = require('@openzeppelin/test-helpers');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Force = contract.fromArtifact('Force');
let force: any;

beforeEach(async () => {
    force = await Force.new(owner, { from: owner });
});

it('Force -> make the balance of the contract greater than zero', async () => {

    const balanceBefore = await balance.current(force.address);
    console.log('before', balanceBefore.toString());



    const balanceAfter = await balance.current(force.address);
    console.log('after', balanceAfter.toString());
});

