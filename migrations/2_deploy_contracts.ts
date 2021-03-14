/*
const Fallback = artifacts.require("Fallback");

module.exports = async (deployer, network, addresses) => {
  await deployer.deploy(Fallback);
};
*/

declare let artifacts: any;
let Truffle: any;

const Fallback = artifacts.require('Fallback');

module.exports = async (
  deployer: Truffle.Deployer,
  network: string,
  accounts: string[]
) => deployer.deploy(Fallback);
