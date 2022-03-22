// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = (arrayData) => {
    let numbers = arrayData.filter((data) => typeof data === "number"); // will exclude strings in array
    let total = numbers.reduce((accumulatedValue, number) => accumulatedValue + number); // The reduce() method returns a single value: the function's accumulated result.
    let average = total / numbers.length;
    return average;
  };
  
  module.exports = average;
