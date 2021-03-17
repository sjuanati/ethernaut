
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Preservation = contract.fromArtifact('Preservation');
//const GatekeeperTwoAttack = contract.fromArtifact('GatekeeperTwoAttack');
let preservation: any;
//let gatekeeperTwoAttack: any;

beforeEach(async () => {
    preservation = await Preservation.new(attacker, { from: owner });
});

it.only('Preservation -> claim ownership of the instance', async () => {
    console.log('Hallo');
});
