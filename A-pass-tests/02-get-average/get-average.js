// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const arrayOfNum = numbers.filter((item) => typeof item == "number");
  return arrayOfNum.reduce((a, b) => a + b) / arrayOfNum.length;
}

module.exports = average;
