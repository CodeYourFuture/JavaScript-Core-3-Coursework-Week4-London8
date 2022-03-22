function convertToNewRoman(n) {
    const romanLookup = [
      {numeral: "M", value: 1000},{numeral: "CM", value: 900}, {numeral: "D", value: 500}, {numeral: "CD", value: 400}, 
      {numeral: "C", value: 100}, {numeral: "XC", value: 90},  {numeral: "L",value: 50},   {numeral: "XL", value: 40},
      {numeral: "X", value: 10},  {numeral: "IX",value: 9},    {numeral: "V", value: 5},   {numeral: "IV", value: 4},
      {numeral: "I", value: 1}
    ];

    let remainingValue = n;
    let newRomanNumeral = "";
    for (let i = 0; i < romanLookup.length; i++) {
        let j = Math.floor(remainingValue / romanLookup[i].value);
        while (remainingValue >= romanLookup[i].value) {
            newRomanNumeral += romanLookup[i].numeral.repeat(j);
            remainingValue -= (romanLookup[i].value * j);
        }
    }
    return newRomanNumeral;
}

module.exports = convertToNewRoman;
