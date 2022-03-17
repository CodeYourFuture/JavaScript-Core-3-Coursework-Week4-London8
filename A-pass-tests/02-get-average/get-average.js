// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filteredArr = numbers.filter((item) => {
    return typeof item === "number";
  });
  return filteredArr.reduce((a, b) => a + b) / filteredArr.length;
}
module.exports = average;
