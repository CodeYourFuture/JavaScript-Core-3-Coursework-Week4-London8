let convertToOldRoman = require("./convert-to-old-roman");

test("returns VI if passed 6 as an argument", function () {
  // Arrange
  const input = 6
  const output = "VI"
  // Act
  const result = convertToOldRoman(input)
  // Assert
  expect(result).toEqual(output)
});

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  const output = "I";
  // Act
  const result = convertToOldRoman(input);
  // Assert
  expect(result).toEqual(output);
});

test("returns XVIII passed 18 as an argument", function () {
  // Arrange
  const input = 18;
  const output = "XVIII";
  // Act
  const result = convertToOldRoman(input);
  // Assert
  expect(result).toEqual(output);
});