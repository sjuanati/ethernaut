
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const GatekeeperTwo = contract.fromArtifact('GatekeeperTwo');
const GatekeeperTwoAttack = contract.fromArtifact('GatekeeperTwoAttack');
let gatekeeperTwo: any;
let gatekeeperTwoAttack: any;

beforeEach(async () => {
    gatekeeperTwo = await GatekeeperTwo.new({ from: owner });
});

it('Gatekeeper Two -> make it past the gatekeeper and register as an entrant', async () => {

    gatekeeperTwoAttack = await GatekeeperTwoAttack.new(gatekeeperTwo.address, { from: attacker });

    assert(await gatekeeperTwo.entrant.call() === attacker);
});
