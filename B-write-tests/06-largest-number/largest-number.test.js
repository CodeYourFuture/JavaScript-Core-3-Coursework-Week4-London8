let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let input = [3, 21, 88, 4, 36];
  let result = 88;
  // Act
  let execute = getLargestNumber(input)
  // Assert
  expect(execute).toEqual(result)
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
