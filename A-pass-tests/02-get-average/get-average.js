// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const newArr = numbers.filter((e) => typeof e === "number");
  return newArr.reduce((a, b) => a + b) / newArr.length;
}

module.exports = average;
