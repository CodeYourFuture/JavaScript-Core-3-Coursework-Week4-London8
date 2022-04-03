// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filteredArr = numbers.filter((item) => {
    return typeof item === "number";
  });
  return filteredArr.reduce((a, b) => a + b) / filteredArr.length;
}

/*function average(numbers) {
  let countOfValidNumbers = 0;
  const isValidNumber = (number) => typeof number === "number";

  const sumOfNumbers = numbers.reduce((total, number) => {
    if (isValidNumber(number)) {
      countOfValidNumbers++;
      return total + number;
    }
  }, 0);

  const averageValue = sumOfNumbers / countOfValidNumbers;
  return averageValue;
}*/

module.exports = average;
