let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const n = 1;
  const expectedResult = 'I';
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expectedResult);
});

test("returns LX if passed 60 as an argument", function () {
  // Arrange
  const n = 60;
  const expectedResult = "LX";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expectedResult);
});

test("returns CM if passed 900 as an argument", function () {
  // Arrange
  const n = 900;
  const expectedResult = "CM";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expectedResult);
});

test("returns M if passed 1000 as an argument", function () {
  // Arrange
  const n = 1000;
  const expectedResult = "M";
  // Act
  const output = convertToNewRoman(n);
  // Assert
  expect(output).toEqual(expectedResult);
});
