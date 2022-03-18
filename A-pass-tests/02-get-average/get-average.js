// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let average = 0;
  let count = 0;
  numbers.forEach((e) => {
    if (typeof e === "number") {
      //console.log(typeof e);
      average += e;
      count++;
    }
  });
  return average / count;
}

module.exports = average;
//average([1, "hi", 2, 5, 6]);
