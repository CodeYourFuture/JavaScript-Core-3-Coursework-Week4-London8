let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let inputOne = 1;
  let inputTwo = 3;
  let inputThree = 4;
  let inputFour = 7;
  let inputFive = 15;
  let inputSix = 18;
  let inputSeven = 22;
  // Act
  let resultOne = convertToOldRoman(inputOne);
  let resultTwo = convertToOldRoman(inputTwo);
  let resultThree = convertToOldRoman(inputThree);
  let resultFour = convertToOldRoman(inputFour);
  let resultFive = convertToOldRoman(inputFive);
  let resultSix = convertToOldRoman(inputSix);
  let resultSeven = convertToOldRoman(inputSeven);

  let expectedOne = "I";
  let expectedTwo = "III";
  let expectedThree = "IIII";
  let expectedFour = "VII";
  let expectedFive = "XV";
  let expectedSix = "XVIII";
  let expectedSeven = "XXII";
  // Assert
  expect(resultOne).toEqual(expectedOne);
  expect(resultTwo).toEqual(expectedTwo);
  expect(resultThree).toEqual(expectedThree);
  expect(resultFour).toEqual(expectedFour);
  expect(resultFive).toEqual(expectedFive);
  expect(resultSix).toEqual(expectedSix);
  expect(resultSeven).toEqual(expectedSeven);
});
