function add(numbers) {
  let splitted = numbers.split(",");
  let sum = splitted.reduce((a, b) => parseInt(a) + parseInt(b));
  return sum.toString();
}

module.exports = add;
