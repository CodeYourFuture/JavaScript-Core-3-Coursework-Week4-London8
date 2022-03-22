let convertToOldRoman = require("./convert-to-old-roman");

test("returns MI if passed 1001 as an argument", function () {
  const input = 1001;
  const output = "MI";
  const result = convertToOldRoman(input);
  expect(result).toEqual(output);
});

test("returns DII if passed 502 as an argument", function () {
  const input = 502;
  const output = "DII";
  const result = convertToOldRoman(input);
  expect(result).toEqual(output);
});

test("returns CV if passed 105 as an argument", function () {
  const input = 105;
  const output = "CV";
  const result = convertToOldRoman(input);
  expect(result).toEqual(output);
});

test("returns LVI if passed 56 as an argument", function () {
  const input = 56;
  const output = "LVI";
  const result = convertToOldRoman(input);
  expect(result).toEqual(output);
});

test("returns VI if passed 6 as an argument", function () {
  const input = 6;
  const output = "VI";
  const result = convertToOldRoman(input);
  expect(result).toEqual(output);
});

test("returns IIII if passed 4 as an argument", function () {
  const input = 4;
  const output = "IIII";
  const result = convertToOldRoman(input);
  expect(result).toEqual(output);
});
