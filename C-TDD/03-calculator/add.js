function add(numbers) {
  if (numbers == "") return 0;
  if (!numbers.includes(",")) return parseInt(numbers);

  return numbers
    .split(",")
    .map(Number)
    .filter((number) => number <= 1000)
    .reduce((a, b) => a + b);
}

module.exports = add;
