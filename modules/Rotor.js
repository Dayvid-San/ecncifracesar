const Alphabet = require('./Alphabet').letters();

exports.rotate = (hop = 0) => {
    if (typeof hop === 'number' && hop % 1 === 0) {
        const pushed = Alphabet.slice(0, hop);
        Alphabet.splice(0, hop);
        Alphabet.sort();
        return Alphabet.concat(pushed);
    } else {
        throw "The value of hop must be a number and integer! ()";
    }
}