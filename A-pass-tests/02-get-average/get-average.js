// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    const average = 0;
    const totalCount = 0;
    numbers.forEach((value) => {
        if (typeof value === "number"){
            average += value;
            totalCount++;
        }
    });
    return result = average / totalCount;
}
//console.log(result);
module.exports = average;
