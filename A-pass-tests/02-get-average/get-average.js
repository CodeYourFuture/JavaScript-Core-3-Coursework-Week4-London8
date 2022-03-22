// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {

    let newAverage= numbers.filter(number => typeof number === "number");
    let sumToDoAverage = newAverage.reduce((a, b) => a+b)/ newAverage.length;

    return sumToDoAverage
}

module.exports = average;
