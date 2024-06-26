require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: __dirname + "/.env" });
// require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  paths: {
    artifacts: "./src/artifacts",
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      bttc: process.env.ETHERSCAN_KEY,
      mainnet: process.env.ETHERSCAN_KEY,
    },
    customChains: [
      {
        network: "mainnet",
        chainId: 199,
        urls: {
          apiURL: "https://api.bttcscan.com/api",
          browserURL: "https://bttcscan.com/",
        },
      },
      {
        network: "bttc",
        chainId: 1029,
        urls: {
          apiURL: "https://api-testnet.bttcscan.com/api",
          browserURL: "https://testnet.bttcscan.com/",
        },
      },
    ],
  },
  networks: {
    mainnet: {
      url: "https://rpc.bt.io",
      gas: "auto",
      chainId: 199,
      accounts: [process.env.PRIVATE_KEY],
    },
    bttc: {
      url: "https://pre-rpc.bt.io/",
      gas: "auto",
      chainId: 1029,
      accounts: [process.env.PRIVATE_KEY],
    },
    holesky: {
      url: "https://eth-holesky.g.alchemy.com/v2/9-2O3J1H0d0Z-xDdDwZHHCBM2mwzVMwT",
      gas: "auto",
      chainId: 17000,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
