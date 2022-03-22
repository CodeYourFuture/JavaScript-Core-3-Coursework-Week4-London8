function convertToNewRoman(n) {
    const numerals = {
      1: "I",
      4: "IV",
      5: "V",
      50: "L",
      60: "LX",
      500: "D",
      900: "CM",
      1000: "M",
    };

    let newRomanNumeral = "";

     const keys = Object.keys(numerals).reverse();
     keys.forEach((key) => {
        if(key <= n) {
            newRomanNumeral += numerals[key];
            n -= key;
        }
     });

    return newRomanNumeral;
}

module.exports = convertToNewRoman;
