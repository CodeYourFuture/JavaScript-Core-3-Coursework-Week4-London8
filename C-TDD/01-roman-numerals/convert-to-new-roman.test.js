let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let result = 1
  expected = "I"

  // Act
  let output = convertToNewRoman(result)

  // Assert
  expect(output).toEqual(expected)

});
