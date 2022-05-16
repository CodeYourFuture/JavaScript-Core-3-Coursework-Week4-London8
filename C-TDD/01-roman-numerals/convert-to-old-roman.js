
function convertToOldRoman(n) {
  let lookup = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    },
    roman = "",
    i;
  for (let i in lookup) {
    while (n >= lookup[i]) {
      roman += i;
      n -= lookup[i];
    }
  }
  return roman;
}
console.log(convertToOldRoman(4));
module.exports = convertToOldRoman;
