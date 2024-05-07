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
      bttc: "GDP6SR7K2RQB6PWJCNZZP96RXK7VA33AVA",
    },
    customChains: [
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
    bttc: {
      url: "https://pre-rpc.bt.io/",
      gas: "auto",
      chainId: 1029,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
