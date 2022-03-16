const add = (numbers) => numbers.split(',').reduce((a, cv) => {
  cv = parseInt(cv, 10);
  if (cv < 0) throw new Error(`Negative numbers not allowed: ${cv}`);
  if (cv && cv <= 1000) return a + cv;
  return a;
}, 0);

module.exports = add;
