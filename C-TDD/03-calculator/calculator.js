const calculator = (str) => {
  if (str === "") 0;
  let arr = str.split(",").map((i) => Number(i));
  let ans = 0;
  if (arr.some((v) => v < 0))
    throw new Error(`Negative numbers not allowed:${arr.filter((i) => i < 0)}`);
  else if (arr.some((v) => v > 1000))
    ans = Number(arr.filter((i) => i < 1000).join(" "));
  else ans = arr.reduce((a, b) => a + b);
  return ans;
};

module.exports = calculator;
