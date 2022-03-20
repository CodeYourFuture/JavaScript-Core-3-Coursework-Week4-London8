let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let inputIsOne = 1;
  let expectedfromOne = "I";

  // Act
  let resultForInputIsOne = convertToOldRoman(inputIsOne);

  // Assert
  expect(resultForInputIsOne).toEqual(expectedfromOne);
});

test("returns III if passed 3 as an argument", function () {
  // Arrange
  let inputIsThree = 3;
  let expectedfromThree = "III";

  // Act
  let resultForInputIsThree = convertToOldRoman(inputIsThree);

  // Assert
  expect(resultForInputIsThree).toEqual(expectedfromThree);
});

test("returns VII if passed 7 as an argument", function () {
  // Arrange
  let inputIsSeven = 7;
  let expectedfromSeven = "VII";

  // Act
  let resultForInputIsSeven = convertToOldRoman(inputIsSeven);

  // Assert
  expect(resultForInputIsSeven).toEqual(expectedfromSeven);
});

test("returns XV if passed 15 as an argument", function () {
  // Arrange
  let inputIsFifteen = 15;
  let expectedfromFifteen = "XV";

  // Act
  let resultForInputIsFifteen = convertToOldRoman(inputIsFifteen);

  // Assert
  expect(resultForInputIsFifteen).toEqual(expectedfromFifteen);
});

test("returns XVIII if passed 18 as an argument", function () {
  // Arrange
  let inputIsEighteen = 18;
  let expectedfromEighteen = "XVIII";

  // Act
  let resultForInputIsEighteen = convertToOldRoman(inputIsEighteen);

  // Assert
  expect(resultForInputIsEighteen).toEqual(expectedfromEighteen);
});

test("returns XXII if passed 22 as an argument", function () {
  // Arrange
  let inputIsTwentyTwo = 22;
  let expectedfromTwentyTwo = "XXII";

  // Act
  let resultForInputIsTwentyTwo = convertToOldRoman(inputIsTwentyTwo);

  // Assert
  expect(resultForInputIsTwentyTwo).toEqual(expectedfromTwentyTwo);
});
