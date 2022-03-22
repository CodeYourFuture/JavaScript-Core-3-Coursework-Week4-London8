// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings


function average(numbers) {
  return numbers.reduce(function(a, b) {
    "number" === typeof b && (a.total += b, a.count += 1, a.average = a.total / a.count);
    return a;
  }, {
    total: 0,
    count: 0,
    average: 0
  }).average;
};

// function average(numbers) {
//   let filteredArray = numbers.filter((element) => typeof element === "number");
//   return filteredArray.reduce((a, b) => a + b) / filteredArray.length;
// }

module.exports = average;
