function convertToOldRoman(n) {
  var lookup = {
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
  for (i in lookup) {
    while (n >= lookup[i]) {
      roman += i;
      n -= lookup[i];
    }
  }
  return roman;
}

module.exports = convertToOldRoman;
