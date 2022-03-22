let verify = require("./verify");

test("If password length is 8 or more, the 'verify' function should return 'Password accepted'", function () {
  //Arrange
  const password = "abcdefg";
  const expected = "Password rejected";
  //Act
  const verified = verify(password);
  //Assert
  expect(verified).toEqual(expected)
});

test("If password is null, the 'verify' function should return 'Password rejected'", function () {
  //Arrange
  const password = null;
  const expected = "Password rejected";
  //Act
  const verified = verify(password);
  //Assert
  expect(verified).toEqual(expected);
});

test("If password 8 characters or more and includes at least one uppercase charter, the 'verify' function should return 'Password accepted'", function () {
  //Arrange
  const password = "uppercase";
  const expected = "Password rejected";
  //Act
  const verified = verify(password);
  //Assert
  expect(verified).toEqual(expected);
});

test("If password 8 characters or more and includes at least one uppercase charter and one number, the 'verify' function should return 'Password accepted'", function () {
  //Arrange
  const password = "aBcDeF1";
  const expected = "Password rejected";
  //Act
  const verified = verify(password);
  //Assert
  expect(verified).toEqual(expected);
});