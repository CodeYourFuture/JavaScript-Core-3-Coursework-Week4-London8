let convertToNewRoman = require("./convert-to-new-roman");

test("returns IV if passed 4 as an argument", function () {
  // Arrange
  const input = 4;
  const output = "IV";
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual(output);
});

test("returns CMXLIV if passed 944 as an argument", function () {
  // Arrange
  const input = 944;
  const output = "CMXLIV";
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual(output);
});

test("returns XCIX passed 99 as an argument", function () {
  // Arrange
  const input = 99;
  const output = "XCIX";
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual(output);
});

test("returns CD passed 400 as an argument", function () {
  // Arrange
  const input = 400;
  const output = "CD";
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual(output);
});

test("returns CDXLIX passed 449 as an argument", function () {
  // Arrange
  const input = 449;
  const output = "CDXLIX";
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual(output);
});