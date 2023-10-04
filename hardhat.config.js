require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/0D6U7HFD4izPYXalaEUIW1L140A_g4zs",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};
