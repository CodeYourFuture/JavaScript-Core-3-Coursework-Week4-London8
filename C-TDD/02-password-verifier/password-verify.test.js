let verify = require("./password-verify");

// REJECT THE FOLLOWING 

test("If the password is less than 8 characters, the 'verify' function should return 'Password rejected'.", 
                                                              function () {
  // Arrange
  const password = "cyftest";
  const result = verify(password);
  // Act
  const expectOutput = "Password rejected";
  // Assert
  expect(result).toEqual(expectOutput);
});

test("If the password is null, the 'verify' function should return 'Password rejected'.", function () {
  // Arrange
  const password = null;
  const result = verify(password);
  // Act
  const expectOutput = "Password rejected";
  // Assert
  expect(result).toEqual(expectOutput);
});

test("If the password does not have at least 1 uppercase letter, the 'verify' function should return 'Password rejected'.", 
                                                                              function () {
  // Arrange
  const password = "no capitals";
  const result = verify(password);
  // Act
  const expectOutput = "Password rejected";
  // Assert
  expect(result).toEqual(expectOutput);
});

test("If the password does not have at least 1 number, the 'verify' function should return 'Password rejected'.", 
                                                                    function () {
  // Arrange
  const password = "ABC--NONUMBERS--";
  const result = verify(password);
  // Act
  const expectOutput = "Password rejected";
  // Assert
  expect(result).toEqual(expectOutput);
});

// PASS THE FOLLOWING

test("OK 1: return 'Password accepted'.", function () {
  // Arrange
  const password = "ABC12345678--";
  const result = verify(password);
  // Act
  const expectOutput = "Password accepted";
  // Assert
  expect(result).toEqual(expectOutput);
});

test("OK 2: return 'Password accepted'.", function () {
  // Arrange
  const password = "- *&^%$'A1";
  const result = verify(password);
  // Act
  const expectOutput = "Password accepted";
  // Assert
  expect(result).toEqual(expectOutput);
});

test("OK 3: return 'Password accepted'.", function () {
  // Arrange
  const password = "ABC12345678--";
  const result = verify(password);
  // Act
  const expectOutput = "Password accepted";
  // Assert
  expect(result).toEqual(expectOutput);
});

test("OK 4: return 'Password accepted'.", function () {
  // Arrange
  const password = "abcdefxyZ0";
  const result = verify(password);
  // Act
  const expectOutput = "Password accepted";
  // Assert
  expect(result).toEqual(expectOutput);
});

test("OK 5: return 'Password accepted'.", function () {
  // Arrange
  const password = "0Aabcdefxyz";
  const result = verify(password);
  // Act
  const expectOutput = "Password accepted";
  // Assert
  expect(result).toEqual(expectOutput);
});
