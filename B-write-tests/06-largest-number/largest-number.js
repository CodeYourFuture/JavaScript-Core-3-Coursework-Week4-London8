function getLargestNumber(array) {
  let largestNumber;
  let smallestNumber;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      largestNumber = array[i];
    }
    if(array[i]<array[i +1]) smallestNumber = arry[i];
  }
  return [largestNumber, smallestNumber];
}

module.exports = getLargestNumber;
