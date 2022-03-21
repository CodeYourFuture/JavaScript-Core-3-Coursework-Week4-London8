let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const n = 1;
  const expected = "I";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns IV if passed 4 as an argument", function () {
  // Arrange
  const n = 4;
  const expected = "IV";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns IX if passed 9 as an argument", function () {
  // Arrange
  const n = 9;
  const expected = "IX";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns CLXVII if passed 167 as an argument", function () {
  // Arrange
  const n = 167;
  const expected = "CLXVII";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns MMDLXXIX if passed 2579 as an argument", function () {
  // Arrange
  const n = 2579;
  const expected = "MMDLXXIX";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns XXII if passed 22 as an argument", function () {
  // Arrange
  const n = 22;
  const expected = "XXII";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

