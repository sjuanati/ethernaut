import { accounts, contract } from '@openzeppelin/test-environment';
const { ether, expectRevert } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
    player1, // A normal player after the attack
] = accounts;

// Loads contracts
const King = contract.fromArtifact('King');
const KingAttack = contract.fromArtifact('KingAttack');
let king: any;
let kingAttack: any;

beforeEach(async () => {
    king = await King.new({ from: owner, value: ether('5') });
    kingAttack = await KingAttack.new({ from: attacker });
});

it('King -> break the level proclamation', async () => {
    const kingBefore = await king._king();

    // A contract with revert in its fallback will call the King contract to
    // become the king. However, any further attempt to become king will fail
    await kingAttack.attack(king.address, { from: attacker, value: ether('6') });

    const kingAfter = await king._king();

    assert(kingBefore === owner, 'initial owner');
    assert(kingAfter === kingAttack.address, 'final owner');
    expectRevert(
        king.sendTransaction({ from: player1, value: ether('7') }),
        'contract is f*cked'
    );
});

