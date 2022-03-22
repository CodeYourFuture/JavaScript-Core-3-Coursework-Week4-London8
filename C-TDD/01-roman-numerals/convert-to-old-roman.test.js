let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const n = 1;
  const expectedResult = 'I';
  // Act
  const output = convertToOldRoman(n);
  // Assert
  expect(output).toEqual(expectedResult);
});
