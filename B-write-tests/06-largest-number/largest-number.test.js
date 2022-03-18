let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  expect(getLargestNumber([1, 2, 3, 4, 5])).toEqual(5);
  expect(getLargestNumber([3, 21, 88, 4, 36])).toEqual(88);
  expect(getLargestNumber([324, 124243, 35, 8, 2])).toEqual(124243);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
