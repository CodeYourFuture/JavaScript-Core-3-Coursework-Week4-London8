let convertToNewRoman = require("./convert-to-new-roman");

test("returns IX if passed 9 as an argument", function () {
  expect(convertToNewRoman(9)).toEqual('IX')
});
test("returns XXXV if passed 35 as an argument", function () {
  expect(convertToNewRoman(35)).toEqual('XXXV')
});
test("returns L if passed 50 as an argument", function () {
  expect(convertToNewRoman(50)).toEqual('L')
});


