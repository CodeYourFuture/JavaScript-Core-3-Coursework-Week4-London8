function convertToNewRoman(n) {
  const newRoman = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    60: "LX",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let number = "";

  const keys = Object.keys(newRoman).reverse();
  keys.forEach((key) => {
    while (key <= n) {
      number += newRoman[key];
      n -= key;
    }
  });
  return number;
}
console.log(convertToNewRoman(2));
module.exports = convertToNewRoman;
