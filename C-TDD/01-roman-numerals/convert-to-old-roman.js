let numeralCodes = [
  ["", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX"], // Ones
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
];
function convertToOldRoman(n) {
  let numeral = "";
  let digits = n.toString().split("").reverse();
  for (let i = 0; i < digits.length; i++) {
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  }
  return numeral;
}

module.exports = convertToOldRoman;
