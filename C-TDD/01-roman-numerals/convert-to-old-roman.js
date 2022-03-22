function convertToOldRoman(n) {
  const oldRoman = [
    { 1: "I" },
    { 5: "V" },
    { 10: "X" },
    { 50: "L" },
    { 100: "C" },
    { 500: "D" },
    { 1000: "M" },
  ];

  let output = "";
  let rem = 0;
  let key_ = 0;
  let value_ = "";

  for (let i = oldRoman.length - 1; i >= 0; i--) {
    key_ = parseInt(Object.keys(oldRoman[i])[0]);
    value_ = Object.values(oldRoman[i])[0];

    if (n >= key_ && n % key_ > 0) {
      rem = n % key_;
      output += value_.repeat((n - rem) / key_);
      n = rem;
    } else if (n > 0 && n < 5) {
      output += "I".repeat(n);
      break;
    }
  }
  return output;
}
module.exports = convertToOldRoman;
