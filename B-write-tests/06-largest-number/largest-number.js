function getLargestNumber(array) {
  // let largestNumber;
  // for (let i = 0; i < array.length - 1; i++) {
  //   if (array[i] > array[i + 1]) {
  //     largestNumber = array[i];
  //   }
  // }
  // return largestNumber;
  let sortedArr = array.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1];
}

module.exports = getLargestNumber;
