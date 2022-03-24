function convertToOldRoman(n) {
  const romanNum = {
    1: "I",
    4: "IIII",
    5: "V",
    9: "VIIII",
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

  let str = "";
  let numeralNumbers = Object.keys(romanNum).reverse();
  numeralNumbers.forEach((number) => {
    if (number <= n) {
      str += romanNum[number];
      n -= number;
    }
  });

  return str;
}

module.exports = convertToOldRoman;
