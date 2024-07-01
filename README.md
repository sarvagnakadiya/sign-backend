# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# deploy command

```shell
npx hardhat ignition deploy ./ignition/modules/ProtocolDeploy.js --network mainnet
```

# verify command

```shell
npx hardhat verify 0x184e1b0b544Da324e2D37Bb713b9D0c16c9eF671 --network mainnet
```

deployed on bttc ✅
