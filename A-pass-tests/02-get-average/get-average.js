// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let num = numbers.filter(number => typeof number === "number")
console.log(num)
let averageNumbers = num.reduce((previousValue, currentValue) => previousValue + currentValue)/num.length;   

return averageNumbers;
}

module.exports = average;
