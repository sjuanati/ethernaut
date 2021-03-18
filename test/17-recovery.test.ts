
import { accounts, contract, web3 } from '@openzeppelin/test-environment';
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Recovery = contract.fromArtifact('Recovery');
//const GatekeeperTwoAttack = contract.fromArtifact('GatekeeperTwoAttack');
let recovery: any;
//let gatekeeperTwoAttack: any;

beforeEach(async () => {
    recovery = await Recovery.new(attacker, { from: owner });
});

it.only('Recovery -> recover (or remove) the 0.5 ether from the lost contract address', async () => {
    
    await recovery.generateToken('Tokenin', 50, { from: owner });
    console.log('token addr:', await recovery.con.call());


    // const data = web3.eth.abi.encodeFunctionCall({
    //     name: 'destroy',
    //     type: 'function',
    //     inputs: [{
    //         type: 'address',
    //         name: '_to'
    //     }]
    // }, [owner]);

    // await web3.eth.sendTransaction({
    //     to: con,
    //     from: owner,
    //     data: data
    // });

});
