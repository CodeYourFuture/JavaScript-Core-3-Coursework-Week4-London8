function add(numbers) {
  if (numbers === "") return 0;
  let individualNumbers = numbers.split(",");
  let negatives = [];
  individualNumbers.forEach((number, index) => {
    if (number < 0) negatives.push(number);
    if (number > 1000) return individualNumbers[index] = 0;
  })
  if (negatives.length > 0) throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  return individualNumbers.length === 1
    ? parseInt(numbers)
    : eval(individualNumbers.join(" + "));
}
module.exports = add;