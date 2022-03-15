function convertToNewRoman(n) {
  let romanNumber = "";
  if (n / 1000 >= 1) {
    romanNumber += "M".repeat(Math.round(n / 1000) - 1);
  }
  let x = n % 1000;
  romanNumber +=
    "CM".repeat(x / 900) +
    "D".repeat((x %= 900) / 500) +
    "CD".repeat((x %= 500) / 400) +
    "C".repeat((x %= 400) / 100) +
    "XC".repeat((x %= 100) / 90) +
    "L".repeat((x %= 90) / 50) +
    "XL".repeat((x %= 50) / 40) +
    "X".repeat((x %= 40) / 10) +
    "IX".repeat((x %= 10) / 9) +
    "V".repeat((x %= 9) / 5) +
    "IV".repeat((x %= 5) / 4) +
    "I".repeat((x %= 4));
  return romanNumber;
}

module.exports = convertToNewRoman;

// | Arabic Number | Roman Numeral |
// | ------------- | ------------- |
// | 1             | I             |
// | 5             | V             |
// | 10            | X             |
// | 50            | L             |
// | 100           | C             |
// | 500           | D             |
// | 1000          | M             |

console.log(convertToNewRoman(944));
//"CMXLIV"
