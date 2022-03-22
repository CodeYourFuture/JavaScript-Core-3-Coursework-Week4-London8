let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const n = 1;
  const expected = "I";
  // Act
  const output = convertToOldRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns IIII if passed 4 as an argument", function () {
  // Arrange
  const n = 4;
  const expected = "IIII";
  // Act
  const output = convertToOldRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns VIIII if passed 9 as an argument", function () {
  // Arrange
  const n = 9;
  const expected = "VIIII";
  // Act
  const output = convertToOldRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns CLXVII if passed 167 as an argument", function () {
  // Arrange
  const n = 167;
  const expected = "CLXVII";
  // Act
  const output = convertToOldRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns MMDLXXVIII if passed 2578 as an argument", function () {
  // Arrange
  const n = 2578;
  const expected = "MMDLXXVIII";
  // Act
  const output = convertToOldRoman(n);
  // Assert
  expect(output).toEqual(expected);
});

test("returns XXII if passed 22 as an argument", function () {
  // Arrange
  const n = 22;
  const expected = "XXII";
  // Act
  const output = convertToOldRoman(n);
  // Assert
  expect(output).toEqual(expected);
});
