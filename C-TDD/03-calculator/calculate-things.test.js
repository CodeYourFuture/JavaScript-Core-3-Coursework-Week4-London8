let calculate = require("./calculate-things");

test("return 'Negatives not allowed' if number is negative", function () {
  const input = -2;
  const output = calculate(input);
  const result = `negatives not allowed:${output}`;
  expect(result).toEqual("negatives not allowed:-2");
});

test("return 'Pass' if n is '1,2,3,4,5'", function () {
  const input = "1,2,3,4,5";

  const result = calculate(input);
  expect(result).toEqual("15");
});
