let convertToNewRoman = require("./convert-to-new-roman");

test("returns IV if passed 4 as an argument", function () {
  // Arrange
  let number = 4;
  let expected = "IV";
  // Act
  let result = convertToNewRoman(number);
  // Assert
  expect(result).toEqual(expected);
});
