// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  var filter = numbers.filter((item) => typeof item === "number");
  var sum = filter.reduce((acc, n) => acc + n, 0);
  return sum / filter.length;
}

module.exports = average;
