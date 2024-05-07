const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("tokenDeploy", (m) => {
  const deploy = m.contract("shake");

  return { deploy };
});
