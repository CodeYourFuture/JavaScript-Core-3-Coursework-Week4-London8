let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  const expected = "I";
  // Act
  const newRomanNumber = convertToNewRoman(input);
  // Assert
  expect(newRomanNumber).toEqual(expected);
});

test("returns IV if passed 4 as an argument", function () {
  // Arrange
  const input = 4;
  const expected = "IV";
  // Act
  const newRomanNumber = convertToNewRoman(input);
  // Assert
  expect(newRomanNumber).toEqual(expected);
});

test("returns XCIX if passed 99 as an argument", function () {
  // Arrange
  const input = 99;
  const expected = "XCIX";
  // Act
  const newRomanNumber = convertToNewRoman(input);
  // Assert
  expect(newRomanNumber).toEqual(expected);
});
