require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain uncover hover problem breeze teach'; 
let testAccounts = [
"0x25e265dfbac2f1e288d705b93e3df0d932a2b4b2f0d18743fbc0d6061ebd923b",
"0x31b0c29dc13720ee31859121bca11641cf094a0856a35ee403ef27a70b111ff7",
"0xe0138a4e7f16d19064a8976d0b55a39d44eb587933c53a19dd646ddcd21d0b4d",
"0xedd3e02f7849b87cb07c8bb938808bb515c7b7176db720db5460a5d8fc4acd25",
"0xca13a67ff43451f0098f1398df167480e5c0166a8c0cf11b0a2155b7e626bd7e",
"0x4e57934f7f378e8f0d519cf6c40c2fa833ebae9e9537991e0705f85bb11600e1",
"0x416b9fce86954dd729558e9ca6158fa416527381ca5e3dd4ccc7c80b3c634554",
"0xdde49d82f21031760c23f599c05e8685362e7ba5df5ebfceb1643a1bb592d461",
"0xbc3602320a9cd29440932c7fb33e85b1d8ba5a55bbc9ab4a2f1d0f9d76681da9",
"0xd7769f5b69b2ed61c286f1dbf2a8808fe163998b31052b1af00b8bddca214dc8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


