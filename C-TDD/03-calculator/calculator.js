function add(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  if (numbers.length === 1 && parseInt(numbers) > 1000) {
    return 0;
  } else if (numbers.length === 1 && parseInt(numbers) <= 1000) {
    if (parseInt(numbers) < 0) {
      throw new Error("negatives not allowed");
    }
    return parseInt(numbers);
  } else if (numbers.length >= 2) {
    let result = numbers
      .split(",")
      .filter((num) => parseInt(num) <= 1000)
      .reduce((a, b) => parseInt(a) + parseInt(b));
    return parseInt(result);
  }
}
module.exports = add;
