function convertToNewRoman(n) {
const numerals = {
  1: "I",
  3: "III",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

let romanized = "";
const numericKeys = Object.keys(numerals).reverse();

numericKeys.forEach((number) => {
  while (number <= n) {
    romanized += numerals[number];
    n -= number;
  }
});

return romanized;

}

module.exports = convertToNewRoman;
