let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const input = [3, 21, 88, 4, 36];
  const output = 88;
  // Act
  const result = getLargestNumber(input);
  // Assert
  expect(result).toEqual(output);
});

test("original array has not changed", () => {
  const input = [3, 21, 88, 4, 36];
  const output = [3, 21, 88, 4, 36];
  getLargestNumber(input);
  expect(input).toEqual(output);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
