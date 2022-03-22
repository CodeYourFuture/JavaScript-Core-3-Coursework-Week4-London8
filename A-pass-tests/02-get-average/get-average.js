// the input is an array of numbers and strings..filter
// return the average of all the numbers...sum numbers/numbers.length..
//reduce https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/
// be sure to exclude the strings


 
function average(numbers) {
    let numbersOnly = numbers.filter( (element) => {
        // if (typeOf(element)=== "number")
        return (typeof element === "number");
        console.log(numbersOnly)
    });
  return numbersOnly.reduce((a, b) => a + b ) / numbersOnly.length  
}

module.exports = average;
