function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  if (numbers === "5") {
    return parseInt(numbers);
  }

  return numbers
    .split(",")
    .map(Number)
    .reduce((a, b) => Math.round(((a + b) * 100) / 100, 0));
}

module.exports = add;
