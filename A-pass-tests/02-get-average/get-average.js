// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filteredNumbers = numbers.filter((item) => typeof item === "number");
  let sum = 0;
  for (let i = 0; i < filteredNumbers.length; i++) {
    sum += filteredNumbers[i];
  }
  return sum / filteredNumbers.length;
}

module.exports = average;
