let convertToOldRoman = require("./convert-to-old-roman");

test("returns III if passed 3 as an argument", function () {
  // Arrange
  let number = 3;
  let expected = "III";
  // Act
  let result = convertToOldRoman(number);
  // Assert
  expect(result).toEqual(expected);
});
