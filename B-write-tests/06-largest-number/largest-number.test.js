let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const array = [56, 9, 67, 23, 31, 2, 99];
  const expected = 99;
  // Act
  const output = getLargestNumber(array);
  // Assert
  expect(output).toEqual(expected);
});

test("check if original array remains the same", () => {
  const array = [56, 9, 67, 23, 31, 2, 99];
  getLargestNumber(array);
  expect(array).toEqual([56, 9, 67, 23, 31, 2, 99]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
