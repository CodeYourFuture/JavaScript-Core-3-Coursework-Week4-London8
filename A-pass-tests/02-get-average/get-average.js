// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let onlyNumbersArr = numbers.filter(num => {
        return (typeof num) === 'number'
    })
    
    let totalOfNumbers = onlyNumbersArr.reduce((num1, num2) => {
         return (num1 + num2)
    })
    return totalOfNumbers/onlyNumbersArr.length
}


module.exports = average;
