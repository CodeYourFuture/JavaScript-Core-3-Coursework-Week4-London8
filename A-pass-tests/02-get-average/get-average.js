// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let filter = numbers.filter((e) => {
        return typeof e === 'number' // checking method if number or string
    })
    let sum = 0
    for(let i = 0; i <filter.length; i++){
        sum += filter[i]
    }
    return sum / filter.length
   
}

module.exports = average;
