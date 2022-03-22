function calculate(n) {
  let numbersArray = n.toString().split(",");

  for (number in numbersArray) {
    if (number < 0) {
      return `negatives not allowed: ${number}`;
    }
  }

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 1000) {
      numbersArray[i] = 0;
    }
  }

  return numbersArray.reduce((a, b) => +a + +b).toString();
}

module.exports = calculate;
