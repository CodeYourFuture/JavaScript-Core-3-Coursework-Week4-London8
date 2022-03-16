const add = (numbers) => numbers.split(',').reduce((a, cv, _, arr) => {
  cv = parseInt(cv, 10);
  if (cv < 0) throw new Error(`Negative numbers not allowed: ${arr.filter(e => e < 0).join(',')}`);
  if (cv && cv <= 1000) return a + cv;
  return a;
}, 0);

module.exports = add;
