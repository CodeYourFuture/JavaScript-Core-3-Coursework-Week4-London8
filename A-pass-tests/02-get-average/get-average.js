// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let sum = 0;
  let newArr = numbers.filter((e) => typeof e === "number");
  newArr.map((e) => (sum += e));
  return sum / newArr.length;
}

module.exports = average;
