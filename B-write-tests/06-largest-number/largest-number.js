function getLargestNumber(array) {
  let largestNumber;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      largestNumber = array[i];
    } else {
      //adding this as it doesn't work if the largest number is at the end of the array
      largestNumber = array[i + 1];
    }
  }
  return largestNumber;
}


module.exports = getLargestNumber;
