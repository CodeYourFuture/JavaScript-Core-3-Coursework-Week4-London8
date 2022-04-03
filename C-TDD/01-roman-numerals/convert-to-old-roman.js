function convertToOldRoman(n) {
  let roman = "";
  roman += "M".repeat(n / 1000);
  n %= 1000;
  roman += "D".repeat(n / 500);
  n %= 500;
  roman += "C".repeat(n / 100);
  n %= 100;
  roman += "L".repeat(n / 50);
  n %= 50;
  roman += "X".repeat(n / 10);
  n %= 10;
  roman += "V".repeat(n / 5);
  n %= 5;
  roman += "I".repeat(n);
  return roman;
}

module.exports = convertToOldRoman;
