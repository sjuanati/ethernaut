
import { accounts, contract } from '@openzeppelin/test-environment';
const { BN } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    user1, // Random user
] = accounts;

// Loads contracts
const CoinFlip = contract.fromArtifact('CoinFlip');
const CoinFlipAttack = contract.fromArtifact('CoinFlipAttack');
let coinflip: any;
let coinflipAttack: any;

beforeEach(async () => {
    coinflip = await CoinFlip.new({ from: owner });
    coinflipAttack = await CoinFlipAttack.new({ from: user1 });
});

it('CoinFlip -> guess the correct outcome 10 times ', async () => {
    // Wins at the beginning: 0
    const winsBefore = new BN(await coinflip.consecutiveWins.call());

    // The attacker contract is launched 10 times
    for (let i = 0; i < 10; i++) {
        await coinflipAttack.attack(coinflip.address);
    };

    // Wins at the end: 10
    const winsAfter = new BN(await coinflip.consecutiveWins.call());

    assert(winsAfter.eq(winsBefore.add(new BN(10))));
});

