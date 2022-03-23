// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let result = numbers.filter((element) => typeof element === "number")
    let average = result.reduce((previousValue, currentValue) => previousValue + currentValue,) / result.length
    return average
}

module.exports = average;

