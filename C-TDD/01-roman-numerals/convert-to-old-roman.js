function convertToOldRoman(n) {
    const romanToModernNumberPair = {
        1: "I",
        5: "V",
        10: 'X',
        50: 'L',
        500: 'D',
        1000: 'M'
    }

    const modernNumbersArr = Object.keys(romanToModernNumberPair).reverse();
    let romanized = '';

    modernNumbersArr.forEach(key => {
        while (key <= n) {
            romanized += romanToModernNumberPair[key];
            n -= key
        }
    })
    return romanized;
    
}

module.exports = convertToOldRoman;

// console.log(convertToOldRoman(9))