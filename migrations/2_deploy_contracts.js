var EthSwap = artifacts.require('./EthSwap.sol');

module.exports = function (deployer) {
  deployer.deploy(EthSwap);
};
