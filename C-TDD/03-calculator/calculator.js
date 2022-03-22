const add = (data) => {
  if (!data) return 0;
  const numbers = data.split(",");

  return numbers.reduce((sum, number) => {
    if (number < 0) {
      throw `Negative numbers not allowed: ${number}`;
    }
    if (number > 1000) {
      return sum;
    } else {
      return sum + Number(number);
    }
  }, 0);
};

module.exports = add;
