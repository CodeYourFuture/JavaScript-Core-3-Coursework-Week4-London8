const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToNewRoman(n) {
  let newRomanNumeral = "";
  for (let value in romanNumerals) {
    let number = n / romanNumerals[value];
    newRomanNumeral += value.repeat(number);
    n %= romanNumerals[value];
  }
  return newRomanNumeral;
}

module.exports = convertToNewRoman;

