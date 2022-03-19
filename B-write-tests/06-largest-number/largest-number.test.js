let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const input = [3, 21, 88, 4, 36];
  let output = getLargestNumber(input)
  // Act
  let expected = 88;
  // Assert
  expect(output).toEqual(expected)
  expect(input).toEqual([3, 21, 88, 4, 36])
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;
// also test that the original array hasn't changed
