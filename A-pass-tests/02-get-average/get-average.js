// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
let numbersOnly = numbers.filter((number) => typeof number === "number");
  return numbersOnly.reduce((a, b) => a + b, 0) / numbersOnly.length;}

module.exports = average;
