const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const provider = new HDWalletProvider({
providerOrUrl: 'provide rpc',
privateKeys: ['privatekey']
})
const web3 = new Web3(provider)
let { contract, signer } = require('./ContractDetails.json')
let { abi } = require('./artifacts/contracts/Storage.sol/Storage.json')
const contractInstance = new web3.eth.Contract(abi, contract)
storeToContract = async () => {
let number = 1001
let trx = await contractInstance.methods.store(number).send({ from: signer })
console.log(trx)
}
retrieveFromContract = async () => {
let result = await contractInstance.methods.retrieve().call()
console.log(result)
}
16
 
storeToContract()
//retrieveFromContract()