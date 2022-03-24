let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  const n = 1;
  const result = convertToOldRoman(n);
  const actualOutput = "I"

  expect(result).toEqual(actualOutput);
});
