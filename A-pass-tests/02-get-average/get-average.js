// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filteredArray = numbers.filter((element) => typeof element === "number");
  return filteredArray.reduce((a, b) => a + b) / filteredArray.length;
}

module.exports = average;
