// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let allNumbers = numbers.filter(element => typeof element === "number");
    return allNumbers.reduce((prevValue, currentValue) => prevValue + currentValue, 0) / allNumbers.length;
}

module.exports = average;
