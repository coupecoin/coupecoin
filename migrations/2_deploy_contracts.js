var CoupeToken = artifacts.require("./CoupeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CoupeToken);
};