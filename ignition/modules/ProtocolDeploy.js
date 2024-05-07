const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("protocolDeploy", (m) => {
  const deploy = m.contract("HandshakeTokenTransfer");

  return { deploy };
});
