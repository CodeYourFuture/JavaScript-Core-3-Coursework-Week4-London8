let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
 // Arrange
  const numbers = [3, 21, 88, 4, 36];
  const expectedResult = 88;
  // Act
  const receivedResult = getLargestNumber(numbers);
  // Assert
  expect(receivedResult).toEqual(expectedResult);
  expect(numbers).toEqual([3, 21, 88, 4, 36]);
  
  
  
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
