// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let newArr = [];
    let total = 0;
    let average;
    for (i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "string") {
            newArr.push(numbers[i]);
        }
    }
        for (number of newArr) {
            total += number;
        }
   average = total / newArr.length;
        return average;
}

module.exports = average;