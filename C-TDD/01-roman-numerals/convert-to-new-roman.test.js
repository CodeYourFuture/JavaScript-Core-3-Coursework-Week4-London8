let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let input = 1;
  // Act
  let exp = "I";
  // Assert
  expect(convertToNewRoman(input)).toEqual(exp);
});

test("returns I if passed 4 as an argument", function () {
  // Arrange
  let input = 4;
  // Act
  let exp = "IV";
  // Assert
  expect(convertToNewRoman(input)).toEqual(exp);
});

test("returns I if passed 9 as an argument", function () {
  // Arrange
  let input = 9;
  // Act
  let exp = "IX";
  // Assert
  expect(convertToNewRoman(input)).toEqual(exp);
});

test("returns I if passed 18 as an argument", function () {
  expect(convertToNewRoman(18)).toEqual("XVIII");
});

test("returns I if passed 90 as an argument", function () {
  expect(convertToNewRoman(94)).toEqual("XCIV");
});

test("returns I if passed 1500 as an argument", function () {
  expect(convertToNewRoman(1500)).toEqual("MC");
});
