let convertToNewRoman = require("./convert-to-new-roman");

test("returns XCIV if passed 94 as an argument", function () {
  // Arrange
  const input = 94;
  // Act
  const output = convertToNewRoman(input);
  // Assert
  expect(output).toEqual("XCIV");
});
