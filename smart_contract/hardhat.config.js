// https://eth-ropsten.alchemyapi.io/v2/xS5rQZWpluy8vLiy5k876q-9GJcTEeTk

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/xS5rQZWpluy8vLiy5k876q-9GJcTEeTk",
      accounts: [
        "5372ef5e9c00c10bd084ee8778cbdee8fd7cb47506e9680f2351f46a66a1fda2",
      ],
    },
  },
};
