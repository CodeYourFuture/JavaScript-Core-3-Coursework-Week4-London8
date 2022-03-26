let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toEqual('I')
});
test("returns VIIII if passed 9 as an argument", function () {
  expect(convertToOldRoman(9)).toEqual('VIIII')
});
