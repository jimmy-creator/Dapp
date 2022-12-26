require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
defaultNetwork: 'polygon',
networks: {
'ganache': {
url: 'http://localhost:8545/',
},
'polygon': {
url: 'https://rpc.public.zkevm-test.net',
accounts: ['bcaa8d5167734889abd6706beff18cc59a82f4b5b4eaa8fc9ddcadd95a0db8af']
},
},
solidity: "^0.8.17",
};