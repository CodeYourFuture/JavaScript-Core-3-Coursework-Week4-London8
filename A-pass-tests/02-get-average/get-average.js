// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let initialValue = 0;

  //exclude strings in an array
  let getNumbersFromArr = numbers.filter((number) => typeof number === "number")
      
  return getNumbersFromArr.reduce((previousValue, currentValue) => {
      return previousValue += currentValue
    },initialValue) / getNumbersFromArr.length;
}

module.exports = average;