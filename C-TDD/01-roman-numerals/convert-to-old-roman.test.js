let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  // Act
  const output = convertToOldRoman(input);
  // Assert
  expect(output).toEqual("I");
});

test("returns LVII if passed 57 as an argument", function () {
  // Arrange
  const input = 57;
  // Act
  const output = convertToOldRoman(input);
  // Assert
  expect(output).toEqual("LVII");
});
