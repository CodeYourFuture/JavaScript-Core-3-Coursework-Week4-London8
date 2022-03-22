// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = (arrayData) => {
  let numbers = arrayData.filter((data) => typeof data === "number");
  let total = numbers.reduce((acc, number) => acc + number);
  let average = total / numbers.length;
  return average;
};

module.exports = average;
