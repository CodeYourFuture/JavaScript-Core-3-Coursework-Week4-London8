// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let onlyNumbers = numbers.filter((value) => typeof value === "number");
  let sum = onlyNumbers.reduce((a, b) => a + b);
  return sum / onlyNumbers.length;
}

module.exports = average;
