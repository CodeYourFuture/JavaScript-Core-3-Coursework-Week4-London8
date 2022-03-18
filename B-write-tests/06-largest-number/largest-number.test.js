let getLargestNumber = require("./largest-number");

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
test("returns largest number in array", () => {
  const numbers = [3, 21, 88, 4, 36];
  const expected = 88;

  const output = getLargestNumber(numbers);

  expect(output).toEqual(expected);
});
