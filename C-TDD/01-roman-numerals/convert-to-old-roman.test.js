let convertToOldRoman = require("./convert-to-old-roman");

test("returns Old Roman numeral from Arabic number", function () {
  let number = 9;
  let expected = "VIIII";

  let output = convertToOldRoman(number);

  expect(output).toEqual(expected);
});

test("returns Old Roman numeral from Arabic number", function () {
  let number = 152;
  let expected = "CLII";

  let output = convertToOldRoman(number);

  expect(output).toEqual(expected);
});

test("returns Old Roman numeral from Arabic number", function () {
  let number = 2563;
  let expected = "MMDLXIII";

  let output = convertToOldRoman(number);

  expect(output).toEqual(expected);
});
