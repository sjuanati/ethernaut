/*
const { expectRevert } = require('@openzeppelin/test-helpers');
const Fallout = artifacts.require('Fallout.sol');

const ethToWei = (item) => web3.utils.toWei(item);

contract('Fallout', (accounts) => {
    let fallout;
    const [owner, user1] = accounts;

    beforeEach(async () => {
        fallout = await Fallout.new({from: owner});
    });

    it('Claim ownership of the contract', async () => {

        // x
        await fallout.contribute({ from: user1, value: ethToWei('0.0005') });

        // b
        await fallout.sendTransaction({ from: user1, value: ethToWei('0.0001') });


    });

});
*/

// Claim ownership of the contract 
// NOT a real constructor ;)
