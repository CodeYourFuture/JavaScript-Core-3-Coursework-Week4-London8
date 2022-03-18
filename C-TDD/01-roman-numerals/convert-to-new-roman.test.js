let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let inputOne = 4;
  let inputTwo = 9;
  let inputThree = 14;
  let inputFour = 44;
  let inputFive = 99;
  let inputSix = 400;
  let inputSeven = 944;
  // Act
  let resultOne = convertToNewRoman(inputOne);
  let resultTwo = convertToNewRoman(inputTwo);
  let resultThree = convertToNewRoman(inputThree);
  let resultFour = convertToNewRoman(inputFour);
  let resultFive = convertToNewRoman(inputFive);
  let resultSix = convertToNewRoman(inputSix);
  let resultSeven = convertToNewRoman(inputSeven);

  let expectedOne = "IV";
  let expectedTwo = "IX";
  let expectedThree = "XIV";
  let expectedFour = "XLIV";
  let expectedFive = "XCIX";
  let expectedSix = "CD";
  let expectedSeven = "CMXLIV";
  // Assert

  expect(resultOne).toEqual(expectedOne);
  expect(resultTwo).toEqual(expectedTwo);
  expect(resultThree).toEqual(expectedThree);
  expect(resultFour).toEqual(expectedFour);
  expect(resultFive).toEqual(expectedFive);
  expect(resultSix).toEqual(expectedSix);
  expect(resultSeven).toEqual(expectedSeven);
});
