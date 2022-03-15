function convertToOldRoman(n) {
  let romanNumber = "";
  let x = n % 3000;
  let y = 1000;
  romanNumber +=
    "M".repeat(x / y) +
    "D".repeat((x %= y) / (y = 500)) +
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
