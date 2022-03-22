function convertToOldRoman(n) {
    let roman = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    let oldRomanNumeral = "";

    for (let letter in roman) {
        const int = Math.floor(n / roman[letter]);
        oldRomanNumeral += letter.repeat(int);
        n -= int * roman[letter];
    }
    
    return oldRomanNumeral;
}

module.exports = convertToOldRoman;
