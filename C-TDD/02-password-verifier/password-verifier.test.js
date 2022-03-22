
const verify = require("./password-verifier");
describe("requirement one", () => {
    test("return Password rejected if password is less than 8 characters", function () {
        // Arrange
        const password = "Alin";
        // Act
        const outPut = verify(password);
        // Assert
        const expected = "Password rejected";

        expect(outPut).toEqual(expected);
    });
});

describe("requirement two", () => {
    test("return Password rejected if password is null", function () {
        // Arrange
        const password = null;
        // Act
        const outPut = verify(password);
        // Assert
        const expected = "Password rejected";

        expect(outPut).toEqual(expected);
    });
});

describe("requirement three", () => {
    test("return Password rejected if password does not have at least 1 uppercase constter ", function () {
        // Arrange
       const password = "alinurisiahsiahi";
        // Act
       const outPut = verify(password);
        // Assert
       const expected = "Password rejected";

        expect(outPut).toEqual(expected);
    });
});

describe("requirement four", () => {
    test("return Password rejected if password does not have at least 1 number ", function () {
        // Arrange
       const password = "Alinurisiahsiahi";
        // Act
       const outPut = verify (password);
        // Assert
       const expected = "Password rejected";

        expect(outPut).toEqual(expected);
    });
});

describe("requirement five", () => {
    test("return Password accepted if all four requirements are met ", function () {
        // Arrange
       const password = "Alinuri1";
        // Act
       const outPut = verify (password);
        // Assert
       const expected = "Password rejected";

        expect(outPut).toEqual(expected);
    });
});