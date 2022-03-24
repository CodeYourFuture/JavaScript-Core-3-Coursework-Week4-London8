let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  const numbers = [3, 21, 88, 4, 36];
  const expected = 88;
  const output = getLargestNumber(numbers);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});
test("returns largest number in array", function () {
  const numbers = [3, 21, 88, 4, 36];
  const expected = 88;
  const output = getLargestNumber(numbers);
  expect(numbers).toEqual([3, 21, 88, 4, 36]);
  // Arrange
  // Act
  // Assert
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
