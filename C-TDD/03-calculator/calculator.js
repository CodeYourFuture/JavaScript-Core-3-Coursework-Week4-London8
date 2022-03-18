let add = (numbers) =>
  numbers.split(",").reduce((a, b) => {
    b = parseInt(b, 10);
    if (b < 0) throw new Error(`Negative numbers not allowed: ${b}`);
    if (b && b <= 1000) return a + b;
    return a;
  }, 0);

module.exports = add;
