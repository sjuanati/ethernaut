
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const NaughtCoin = contract.fromArtifact('NaughtCoin');
//const GatekeeperTwoAttack = contract.fromArtifact('GatekeeperTwoAttack');
let naughtCoin: any;
//let gatekeeperTwoAttack: any;

beforeEach(async () => {
    naughtCoin = await NaughtCoin.new({ from: owner });
});

it('Gatekeeper Two -> make it past the gatekeeper and register as an entrant', async () => {

    console.log('Hallo');
});
