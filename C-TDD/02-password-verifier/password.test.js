let verify = require("./password");

test("returns accepted if passed >8 letter word with atleat 1 number and 1 upperCase letter as an argument", function () {
  // Arrange
  let expected = "Password accepted";
  // Act
  let result = verify('Codeyourfuture2022');
  // Assert
  expect(result).toEqual(expected);
});

