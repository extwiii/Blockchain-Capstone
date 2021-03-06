const HDWalletProvider = require("truffle-hdwallet-provider");

const MNEMONIC = "";
const API_KEY = "";
module.exports = {
  networks: {
    development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*"
    },
    rinkeby: {
        provider: function() {
            return new HDWalletProvider(MNEMONIC, 'https://rinkeby.infura.io/v3/' + API_KEY)
        },
        network_id: 4
    }
  },
  compilers: {
    solc: {
      version: "^0.5.0", 
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000   // Optimize for how many times you intend to run the code
        }
      }
    }
  }
};