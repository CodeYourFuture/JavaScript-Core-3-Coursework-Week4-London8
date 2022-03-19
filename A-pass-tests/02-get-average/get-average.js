// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let justNumbers = numbers.filter(number => typeof number === "number");
    let sum = justNumbers.reduce((previousValue,currentValue) => previousValue + currentValue)
    return sum/justNumbers.length;
}

module.exports = average;
