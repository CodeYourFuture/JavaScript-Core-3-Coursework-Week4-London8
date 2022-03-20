let add = require("./add");

test("returns 0 if numbers is an empty string", function () {
  // Arrange
  let input = "";
  let expected = 0;

  // Act
  let result = add(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns number if numbers has 1 number", function () {
  // Arrange
  let input = "100";
  let expected = 100;

  // Act
  let result = add(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns sum of numbers if numbers has 2 numbers", function () {
  // Arrange
  let input = "1,2";
  let expected = 3;

  // Act
  let result = add(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns sum of numbers if numbers has than 2 numbers", function () {
  // Arrange
  let input = "1,2,3";
  let expected = 6;

  // Act
  let result = add(input);

  // Assert
  expect(result).toEqual(expected);
});

test("ignore numbers bigger than 1000", function () {
  // Arrange
  let input = "1001,2";
  let expected = 2;

  // Act
  let result = add(input);

  // Assert
  expect(result).toEqual(expected);
});

// test("negative numbers not allowed", function () {
//   // Arrange
//   let input = "10, -2";
//   let expected = "negatives not allowed: -2";

//   // Act
//   let result = add(input);

//   // Assert
//   expect(result).toThrowError(expected);
// });
