let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  const expected = "I";
  // Act
  const oldRomanNum = convertToOldRoman(input);
  // Assert
  expect(oldRomanNum).toEqual(expected);
});

test("returns IX if passed 9 as an argument", function () {
  // Arrange
  const input = 9;
  const expected = "VIIII";
  // Act
  const oldRomanNum = convertToOldRoman(input);
  // Assert
  expect(oldRomanNum).toEqual(expected);
});

test("returns X if passed 10 as an argument", function () {
  // Arrange
  const input = 10;
  const expected = "X";
  // Act
  const oldRomanNum = convertToOldRoman(input);
  // Assert
  expect(oldRomanNum).toEqual(expected);
});

test("returns LI if passed 51 as an argument", function () {
  // Arrange
  const input = 51;
  const expected = "LI";
  // Act
  const oldRomanNum = convertToOldRoman(input);
  // Assert
  expect(oldRomanNum).toEqual(expected);
});



