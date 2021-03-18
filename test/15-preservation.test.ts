
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

beforeEach(async () => {
    // Contracts deployment
    libraryContract1 = await LibraryContract.new();
    libraryContract2 = await LibraryContract.new();
    preservation = await Preservation.new(
        libraryContract1.address,
        libraryContract2.address,
        { from: owner }
    );
});

it.only('Preservation -> claim ownership of the instance', async () => {
    console.log('Hallo');
});
