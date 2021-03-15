import { accounts, contract, web3 } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Vault = contract.fromArtifact('Vault');
let vault: any;

beforeEach(async () => {
    vault = await Vault.new(web3.utils.fromAscii('jandemorning'), { from: owner });
});

it('Vault -> unlock the pass', async () => {

    const lockBefore = await vault.locked.call();

    // Get stored data in the 2nd variable
    const pwd = await web3.eth.getStorageAt(vault.address, 1);

    // Unlock the password
    await vault.unlock(pwd, { from: attacker });

    const lockAfter = await vault.locked.call();

    assert(lockBefore !== lockAfter);
});

