let verify = require("./password-verifier");

describe("requirement 1", () => {
    
    test("return Password rejected if If the password is less than 8 characters", function () {
  // Arrange
  // Act
  // Assert

  const password = "Senami"; ;
  const result = verify(password);
  const actualOutput = "Password rejected";

  expect(result).toEqual(actualOutput);
});
})  


describe("requirement 2", () => {
  test("return Password rejected if the password is null", function () {
    // Arrange
    // Act
    // Assert

    const password = "";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});  

describe("requirement 3", () => {
  test("return Password rejected if the password does not have at least 1 uppercase letter", function () {
    // Arrange
    // Act
    // Assert

    const password = "senamiii";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});  

describe("requirement 4", () => {
  test("return Password rejected if the password does not have at least 1 number", function () {
    // Arrange
    // Act
    // Assert

    const password = "Senamiii";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});

describe("requirement 5", () => {
  test("return Password accepted if the password meet all criteria", function () {
    // Arrange
    // Act
    // Assert

    const password = "Senamie6";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});
