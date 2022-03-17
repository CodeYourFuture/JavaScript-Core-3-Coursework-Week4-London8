let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let input = 1;
  // Act
  let exp = "I";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});

test("returns I if passed 3 as an argument", function () {
  // Arrange
  let input = 3;
  // Act
  let exp = "III";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});

test("returns I if passed 4 as an argument", function () {
  // Arrange
  let input = 4;
  // Act
  let exp = "IIII";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});

test("returns I if passed 5 as an argument", function () {
  // Arrange
  let input = 5;
  // Act
  let exp = "V";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});

test("returns I if passed 9 as an argument", function () {
  // Arrange
  let input = 9;
  // Act
  let exp = "VIIII";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});

test("returns I if passed 15 as an argument", function () {
  // Arrange
  let input = 15;
  // Act
  let exp = "XV";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});

test("returns I if passed 158 as an argument", function () {
  // Arrange
  let input = 158;
  // Act
  let exp = "CLVIII";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});

test("returns I if passed 1547 as an argument", function () {
  // Arrange
  let input = 1547;
  // Act
  let exp = "MDXXXXVII";
  // Assert
  expect(convertToOldRoman(input)).toEqual(exp);
});
