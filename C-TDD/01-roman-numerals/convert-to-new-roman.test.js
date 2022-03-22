let convertToNewRoman = require("./convert-to-new-roman");

test("returns IV if passed 4 as an argument", function () {
  const input = 4;
  const output = "IV";
  const result = convertToNewRoman(input);
  expect(result).toEqual(output);
});

test("returns IX if passed 9 as an argument", function () {
  const input = 9;
  const output = "IX";
  const result = convertToNewRoman(input);
  expect(result).toEqual(output);
});

test("returns XIV if passed 14 as an argument", function () {
  const input = 14;
  const output = "XIV";
  const result = convertToNewRoman(input);
  expect(result).toEqual(output);
});

test("returns XCIX  if passed 99 as an argument", function () {
  const input = 99;
  const output = "XCIX";
  const result = convertToNewRoman(input);
  expect(result).toEqual(output);
});

test("returns CMXLIV  if passed 944 as an argument", function () {
  const input = 944;
  const output = "CMXLIV";
  const result = convertToNewRoman(input);
  expect(result).toEqual(output);
});

test("returns MLV  if passed 1055 as an argument", function () {
  const input = 1055;
  const output = "MLV";
  const result = convertToNewRoman(input);
  expect(result).toEqual(output);
});
