const ethers = require('ethers');

const DEV_MNEMONIC =
      "harsh master island dirt equip search awesome double turn crush wool grant";

function main() {
    try {

        let mnemonicWallet = ethers.Wallet.fromPhrase(DEV_MNEMONIC);
        console.log(mnemonicWallet.privateKey);
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
