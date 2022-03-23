let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let n = 1;
  let expected = 'I';
  // Act
  let output  = convertToOldRoman(n)
  // Assert
  expect(output).toEqual(expected)

});

