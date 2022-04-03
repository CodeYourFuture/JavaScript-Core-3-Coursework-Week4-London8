// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let average;
  let array = [];
  let count = 0;
  for (num of numbers) {
    if (Number.isInteger(num)) {
      array.push(num);
      count += num;
    }
  }
  average = count / array.length;
  return average;
}
module.exports = average;
