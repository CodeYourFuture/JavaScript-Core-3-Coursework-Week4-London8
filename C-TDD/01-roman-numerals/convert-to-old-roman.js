const romanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};


function convertToOldRoman(n) {
  let oldRomanNumeral = "";
  for (let value in romanNumerals) {
    let number = n / romanNumerals[value];
    oldRomanNumeral += value.repeat(number);
    n %= romanNumerals[value]
  }
  return oldRomanNumeral;
}

module.exports = convertToOldRoman;
