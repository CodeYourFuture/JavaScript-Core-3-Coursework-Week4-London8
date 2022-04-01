function add(numbers) {
  let sum = 0;
  let numbersArr = (numbers.split(",")).map((number) => Number(number));

  if (numbers === "") {
    return 0;
  }

  if (numbers.length === 1) {
    return Number(numbersArr[0]);
  }

  if (numbers.length > 1) {
    sum = numbersArr.reduce((previousValue, currentValue) => {
      return Number(previousValue + currentValue);
    });
    return sum;
  }
}

module.exports = add;
