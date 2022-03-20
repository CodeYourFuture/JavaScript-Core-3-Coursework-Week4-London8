// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let averageNum = numbers.filter((num) => Number.isInteger(num));
  let totalNum = averageNum.reduce((a, b) => a + b);
  return totalNum / averageNum.length;
}

module.exports = average;
