// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const nums = numbers.filter((e) => typeof e === 'number');
  return nums.reduce((a, cv) => a + cv, 0) / nums.length;
}

module.exports = average;
