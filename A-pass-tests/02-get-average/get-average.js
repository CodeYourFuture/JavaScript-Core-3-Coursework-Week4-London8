// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let newArr = numbers.filter(x => typeof x === "number");
    let total = newArr.reduce((a,b) => a+b);
    let average = total/newArr.length;
    return average;
 }
 module.exports = average;