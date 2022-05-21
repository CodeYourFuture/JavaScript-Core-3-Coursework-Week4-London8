module.exports = function addOne(numbers) {
  /* Implement the function to make the tests pass */
  let newArr = [];
  for (let number of numbers) {
    newArr.push(number += 1);
  }
  return newArr;
};
