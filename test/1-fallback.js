const { expectRevert } = require('@openzeppelin/test-helpers');
const Fallback = artifacts.require('Fallback.sol');

contract('Fallback', (accounts) => {
    let fallback;
    const [owner, user1] = accounts;

    beforeEach(async () => {
        fallback = await Fallback.new();
    });

    it('should create an offer', async () => {
        await fallback.contribute({ from: user1, value: 10 });
        const con = await fallback.getContribution({ from: user1 });
        console.log('con:', con.toNumber());
    });

});
