function add(numbers) {
  if (!numbers) return 0;
  const result = numbers.split(",");
  return result.reduce((acc, number) => {
    if (parseInt(number) > 1000) return acc;
    if (parseInt(number) < 0)
      throw new Error(`Negative numbers not allowed: ${parseInt(number)}`);
    return acc + parseInt(number);
  }, 0);
}
module.exports = add;
