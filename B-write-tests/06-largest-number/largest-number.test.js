let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange  // Act  // Assert
  
  expect(getLargestNumber([3, 21, 88, 4, 36])).toEqual(88);
  expect(getLargestNumber([567, 765, 789, 48, 0])).toEqual(789);
  expect(getLargestNumber([89478, 89482, 78960, 89444, 894456])).toEqual(894456);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
