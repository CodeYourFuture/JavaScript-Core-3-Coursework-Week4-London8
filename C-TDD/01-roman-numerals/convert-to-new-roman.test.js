let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  let n = 1;
  let result = convertToNewRoman(n);
  let expected = "I";
  expect(result).toEqual(expected);
});
