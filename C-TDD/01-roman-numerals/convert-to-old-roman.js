const convertToOldRoman = (n) => {

const numerals = {
  1: "I",
  3: "III",
  5: "V",
  9: "VIIII",
  10: "X",
  40: "XXXX",
  50: "L",
  90: "LXXXX",
  100: "C",
  400: "CCCC",
  500: "D",
  900: "DCCCC",
  1000: "M"
}

let romanized = "";
const numericKeys = Object.keys(numerals).reverse();

numericKeys.forEach((number) => {
  while(number <= n) {
    romanized += numerals[number]
    n -= number;
  }
})

return romanized;
}

module.exports = convertToOldRoman;
