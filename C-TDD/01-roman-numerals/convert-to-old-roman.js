function convertToOldRoman(n) {
  let oldRoman = "";

  let arabicArray = [1000, 500, 100, 50, 10, 5, 1];
  let romanArray = ["M", "D", "C", "L", "X", "V", "I"];

  //loop through arabicArray
  arabicArray.forEach((arabicNum, index) => {
    if (Math.floor(n / arabicNum) >= 1) {
      oldRoman += romanArray[index].repeat(Math.floor(n / arabicNum));
      n = n % arabicNum;
    }
  });
  return oldRoman;
}

module.exports = convertToOldRoman;
