let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const theArray = [3, 21, 88, 4, 36];
  const result = getLargestNumber(theArray);
  // Act
  const expectOutput = 88;
  // Assert
  expect(result).toEqual(expectOutput) && expect(theArray).toEqual([3, 21, 88, 4, 36]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
