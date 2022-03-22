// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  return (
    numbers.filter((n) => typeof n === "number").reduce((p, c) => p + c, 0) /
    numbers.filter((n) => typeof n === "number").length
  );
}

module.exports = average;

console.log(average([4, "-", 8, 11, "hello", "57", 0, 2]));
