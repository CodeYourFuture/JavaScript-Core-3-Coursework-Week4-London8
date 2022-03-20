let verify = require("./verify");

test("returns Password rejected if password is less than 8 characters", function () {
  // Arrange
  let input = "1234567";
  let expected = "Password rejected";

  // Act
  let result = verify(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns Password rejected if password is null", function () {
  // Arrange
  let input = null;
  let expected = "Password rejected";

  // Act
  let result = verify(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns Password rejected if password does not have at least 1 uppercase letter", function () {
  // Arrange
  let input = "qwertyui";
  let expected = "Password rejected";

  // Act
  let result = verify(input);

  // Assert
  expect(result).toEqual(expected);
});

test("returns Password rejected if password does not have at least 1 number", function () {
  // Arrange
  let input = "Qwertyui";
  let expected = "Password rejected";

  // Act
  let result = verify(input);

  // Assert
  expect(result).toEqual(expected);
});
