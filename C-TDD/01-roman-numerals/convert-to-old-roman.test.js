let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(1);
  // Act
  const expectedOutput = "I";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns III if passed 3 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(3);
  // Act
  const expectedOutput = "III";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns IIII if passed 4 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(4);
  // Act
  const expectedOutput = "IIII";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns V if passed 5 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(5);
  // Act
  const expectedOutput = "V";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns VIIII if passed 9 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(9);
  // Act
  const expectedOutput = "VIIII";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns XIIII if passed 14 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(14);
  // Act
  const expectedOutput = "XIIII";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns XV if passed 15 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(15);
  // Act
  const expectedOutput = "XV";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns XXII if passed 22 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(22);
  // Act
  const expectedOutput = "XXII";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns LVIII if passed 58 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(58);
  // Act
  const expectedOutput = "LVIII";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns LXXXXVIIII if passed 99 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(99);
  // Act
  const expectedOutput = "LXXXXVIIII";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns C if passed 100 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(100);
  // Act
  const expectedOutput = "C";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns D if passed 500 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(500);
  // Act
  const expectedOutput = "D";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns M if passed 1000 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(1000);
  // Act
  const expectedOutput = "M";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns MDCCCCLXXXXVIIII if passed 1999 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(1999);
  // Act
  const expectedOutput = "MDCCCCLXXXXVIIII";
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("returns MMXXII if passed 2022 as an argument", function () {
  // Arrange
  const result = convertToOldRoman(2022);
  // Act
  const expectedOutput = "MMXXII";
  // Assert
  expect(result).toEqual(expectedOutput);
});