function convertToOldRoman(n) {
  let romanNumber = "";
  if (n / 1000 >= 1) {
    romanNumber += "M".repeat(Math.round(n / 1000) - 1);
  }
  let x = n % 1000;
  let y = 500;
  romanNumber +=
    "D".repeat(x / y) +
    "C".repeat((x %= y) / (y = 100)) +
    "L".repeat((x %= y) / (y = 50)) +
    "X".repeat((x %= y) / (y = 10)) +
    "V".repeat((x %= y) / (y = 5)) +
    "I".repeat((x %= y));
  return romanNumber;
}

module.exports = convertToOldRoman;

// | Arabic Number | Roman Numeral |
// | ------------- | ------------- |
// | 1             | I             |
// | 5             | V             |
// | 10            | X             |
// | 50            | L             |
// | 100           | C             |
// | 500           | D             |
// | 1000          | M             |

console.log(convertToOldRoman(8));
