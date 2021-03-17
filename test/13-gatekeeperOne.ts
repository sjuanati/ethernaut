
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const GatekeeperOne = contract.fromArtifact('GatekeeperOne');
const GatekeeperOneAttack = contract.fromArtifact('GatekeeperOneAttack');
let gatekeeperOne: any;
let gatekeeperOneAttack: any;

beforeEach(async () => {
    gatekeeperOne = await GatekeeperOne.new({ from: owner });
    gatekeeperOneAttack = await GatekeeperOneAttack.new({ from: attacker });
});

it('Gatekeeper One -> make it past the gatekeeper and register as an entrant', async () => {

    await gatekeeperOneAttack.attack(gatekeeperOne.address);

    // Pending gateTwo() and gateThree()

});
