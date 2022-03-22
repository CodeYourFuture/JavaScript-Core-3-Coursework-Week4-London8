let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
   let number = [3, 21, 88, 4, 36];
    let result = getLargestNumber(number);
   let expected = 88;
  expect(result).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
