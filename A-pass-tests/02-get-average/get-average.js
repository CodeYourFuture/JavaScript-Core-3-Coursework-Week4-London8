// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    numbers = numbers.filter((x) => typeof x === "number");
   return numbers.reduce((a, b) => a + b) / numbers.length;
}

module.exports = average;
