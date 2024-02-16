const ethers = require('ethers');

const DEV_MNEMONIC =
      "harsh master island dirt equip search awesome double turn crush wool grant";

function main() {
    try {

        let mnemonicWallet = ethers.Wallet.fromPhrase(DEV_MNEMONIC);
        console.log(mnemonicWallet.privateKey);

        let balance = '0x54b40b1f852bda00000';
        let amount = parseInt(balance, 16) / Math.pow(10, 18);
        console.log(amount);
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
