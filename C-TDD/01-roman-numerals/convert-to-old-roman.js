function convertToOldRoman(n) {
  let roman = "";
  while (n > 0) {
    if (n >= 1000) {
      roman += "M";
      n -= 1000;
    } else if (n >= 500) {
      roman += "D";
      n -= 500;
    } else if (n >= 100) {
      roman += "C";
      n -= 100;
    } else if (n >= 50) {
      roman += "L";
      n -= 50;
    } else if (n >= 5) {
      roman += "V";
      n -= 5;
    } else if (n >= 1) {
      roman += "I";
      n -= 1;
    }
  }
  return roman;
}

module.exports = convertToOldRoman;
