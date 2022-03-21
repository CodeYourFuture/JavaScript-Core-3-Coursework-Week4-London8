// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
  return int === 0 ? 1 : Array.from({length: int}, (_, i) => i + 1).reduce((a, b) => a * b)
}

module.exports = factorial;
