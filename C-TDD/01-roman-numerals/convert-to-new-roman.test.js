let convertToNewRoman = require("./convert-to-new-roman");

test("returns IV if passed 4 as an argument", function () {
  // Arrange
  let input = 4;
  let expected = "IV";

  // Act
  let result = convertToNewRoman(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns IX if passed 9 as an argument", function () {
  // Arrange
  let input = 9;
  let expected = "IX";

  // Act
  let result = convertToNewRoman(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns XIV if passed 14 as an argument", function () {
  // Arrange
  let input = 14;
  let expected = "XIV";

  // Act
  let result = convertToNewRoman(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns XLIV if passed 44 as an argument", function () {
  // Arrange
  let input = 44;
  let expected = "XLIV";

  // Act
  let result = convertToNewRoman(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns XCIX if passed 99 as an argument", function () {
  // Arrange
  let input = 99;
  let expected = "XCIX";

  // Act
  let result = convertToNewRoman(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns CD if passed 400 as an argument", function () {
  // Arrange
  let input = 400;
  let expected = "CD";

  // Act
  let result = convertToNewRoman(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns CMXLIV if passed 944 as an argument", function () {
  // Arrange
  let input = 944;
  let expected = "CMXLIV";

  // Act
  let result = convertToNewRoman(input);

  // Assert
  expect(result).toEqual(expected);
});
