function calculate(n) {
  const nArr = n.toString().split(",");
  return nArr.reduce((a, b) => +a + +b).toString();

  //2 negative numbers
}

module.exports = calculate;
