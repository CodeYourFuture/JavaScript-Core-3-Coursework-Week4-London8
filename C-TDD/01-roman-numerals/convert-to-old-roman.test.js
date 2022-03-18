let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  input = 1;
  expect(convertToOldRoman(input)).toEqual("I");
});
test("works for 2999", function () {
  input = 2999;
  expect(convertToOldRoman(input)).toEqual("MMDCCCCLXXXXVIIII");
});
test("works for 18", function () {
  input = 18;
  expect(convertToOldRoman(input)).toEqual("XVIII");
});
test("works for 22", function () {
  input = 22;
  expect(convertToOldRoman(input)).toEqual("XXII");
});
