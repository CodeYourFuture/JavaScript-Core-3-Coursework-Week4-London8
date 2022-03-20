let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const array = [3, 21, 88, 4, 36];
  // Act
  const expected = 88;
  // Assert
  const result = getLargestNumber(array);
  expect(result).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
