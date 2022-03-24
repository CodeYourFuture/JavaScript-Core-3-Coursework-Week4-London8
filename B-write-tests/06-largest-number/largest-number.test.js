let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let numbers = [3, 21, 88, 4, 36];
  let expected = 88;
  // Act
  let output = getLargestNumber(numbers);
  // Assert
  expect(output).toEqual(expected);
});
test("The original array hasn't changed", function () {
  // Arrange
  let numbers = [3, 21, 88, 4, 36];
  let expected = [3, 21, 88, 4, 36];
  // Act
  getLargestNumber(numbers);
  // Assert
  expect(numbers).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
