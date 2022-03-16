const romanNumbers = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToNewRoman(n) {
  let newRoman = '';
  const keys = Object.keys(romanNumbers);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const k = Math.floor(n / romanNumbers[key]);
    newRoman += key.repeat(k);
    n %= romanNumbers[key];
  }
  return newRoman;
}

module.exports = convertToNewRoman;
