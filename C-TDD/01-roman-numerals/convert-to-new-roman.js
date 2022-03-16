function convertToNewRoman(n) {
  let romanNumber = "";
  let x = n % 3000;
  let y = 1000;
  romanNumber +=
    "M".repeat(x / y) +
    "CM".repeat((x %= y) / (y = 900)) +
    "D".repeat((x %= y) / (y = 500)) +
    "CD".repeat((x %= y) / (y = 400)) +
    "C".repeat((x %= y) / (y = 100)) +
    "XC".repeat((x %= y) / (y = 90)) +
    "L".repeat((x %= y) / (y = 50)) +
    "XL".repeat((x %= y) / (y = 40)) +
    "X".repeat((x %= y) / (y = 10)) +
    "IX".repeat((x %= y) / (y = 9)) +
    "V".repeat((x %= y) / (y = 5)) +
    "IV".repeat((x %= y) / (y = 4)) +
    "I".repeat((x %= y));
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
