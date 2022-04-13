// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filteredNumArray = numbers.filter((number) => typeof number == "number");
  let sumOfNum = filteredNumArray.reduce((a, b) => a + b);
  return sumOfNum / filteredNumArray.length; // to get average
}

module.exports = average;
