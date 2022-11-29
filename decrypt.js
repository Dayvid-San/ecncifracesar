const Print = require('./modules/Output').print;
const Argv = process.argv.slice(2);
const Alphabet = require('./modules/Alphabet').letters();
const AlphabetCipher = require('./modules/Rotor').rotate(parseInt(Argv[0]));
const cipherText = Argv[1].toLowerCase();

function decrypt() {

    let text = '';
    for (let letter of cipherText) {
        let needle = AlphabetCipher.indexOf(letter);
        text += (Alphabet[needle]) ? Alphabet[needle] : letter;
    }
    return text;
}

//module.exports = decrypt;



Print('*** CAESAR CIPHER ***\n', 'FgBlue', 'Bright');
Print("Decrypting...", 'FgGreen');
Print(`${Argv[0]} ROT(s).\n`, 'FgRed');
Print(`Input: `, 'FgYellow');
Print(cipherText);
Print(`Output: `, 'FgYellow');
Print(decrypt());