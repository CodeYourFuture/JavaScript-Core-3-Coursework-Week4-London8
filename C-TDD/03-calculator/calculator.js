  const add = (numbers) => {
    if (numbers.length === 0) return 0;
    else {
      let array = numbers.split(",").map((number) => parseInt(number));
      if (array.some((number) => number < 0)) {
        throw new Error(
          `Negatives not allowed: ${array
            .filter((number) => number < 0)
            .join(", ")}`
        );
      } else {
        if (array.length === 1 && array[0] > 1000) return 0;
        if (array.length === 1 && array[0] <= 1000) return array[0];
        else {
          return array.filter((number) => number <= 1000).reduce((a, b) => a + b);
        }
      }
    }
  };

  module.exports = add;
