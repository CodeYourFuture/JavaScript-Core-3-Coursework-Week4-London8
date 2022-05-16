let convertToNewRoman = require("./convert-to-new-roman");

test("returns IX if passed 9 as an argument", function () {
  // Arrange
  let expected = "IX";
  // Act
  let result = convertToNewRoman(9);
  // Assert
  expect(result).toEqual(expected);
});
