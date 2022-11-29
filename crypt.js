const Print = require('./modules/Output').print;
const Argv = process.argv.slice(2);
const Alphabet = require('./modules/Alphabet').letters();
const AlphabetCipher = require('./modules/Rotor').rotate(parseInt(Argv[0]));
const text = Argv[1].toLowerCase();
let cipherText = '';

function crypt() {
    for (let letter of text) {
        let needle = Alphabet.indexOf(letter);
        cipherText += (AlphabetCipher[needle]) ? AlphabetCipher[needle] : letter;
    }
    return cipherText;
}

module.exports = crypt

/*
Print('*** CAESAR CIPHER ***\n', 'FgBlue', 'Bright');
Print("Encrypting...", 'FgGreen');
Print(`${Argv[0]} ROT(s).\n`, 'FgRed');
Print(`Input: `, 'FgYellow');
Print(text);
Print(`Output: `, 'FgYellow');
Print(crypt());

*/