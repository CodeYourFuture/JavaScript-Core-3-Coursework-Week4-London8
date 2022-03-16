/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
const romanNumbers = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

function convertToOldRoman(n) {
  let oldRoman = '';
  for (const key of Object.keys(romanNumbers)) {
    const i = Math.floor(n / romanNumbers[key]);
    oldRoman += key.repeat(i);
    n %= romanNumbers[key];
  }
  return oldRoman;
}

module.exports = convertToOldRoman;
