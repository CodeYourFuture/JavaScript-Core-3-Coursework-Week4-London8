function convertToOldRoman(n) {
  let romanNumber = "";
  if (n / 1000 >= 1) {
    romanNumber += "M".repeat(Math.round(n / 1000) - 1);
  }
  romanNumber +=
    "D".repeat((n % 1000) / 500) +
    "C".repeat(((n % 1000) % 500) / 100) +
    "L".repeat((((n % 1000) % 500) % 100) / 50) +
    "X".repeat(((((n % 1000) % 500) % 100) % 50) / 10) +
    "V".repeat((((((n % 1000) % 500) % 100) % 50) % 10) / 5) +
    "I".repeat((((((n % 1000) % 500) % 100) % 50) % 10) % 5);
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

console.log(convertToOldRoman(944));
