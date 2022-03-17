let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let input = [3, 21, 88, 4, 36];
  // Act
  let exp = 88;
  // Assert
  expect(exp).toEqual(getLargestNumber(input));
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
