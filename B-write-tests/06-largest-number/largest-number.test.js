let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let number = [3, 21, 88, 4, 36];
  let toEqualResult = 88;
  // Act
  let receiveResult = getLargestNumber(number);
  // Assert
  expect(receiveResult).toEqual(toEqualResult);
  expect(number).toEqual([3, 21, 88, 4, 36]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
