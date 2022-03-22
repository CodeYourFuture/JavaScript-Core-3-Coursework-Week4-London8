let verify = require("./password-verifier");

describe("requirement one", () => {
  test("If the password is less than 8 characters", () => {
    const pass = "123";
    const expected = "Password rejected";
    const outPut = verify(pass);

    expect(outPut).toEqual(expected);
  });
});

describe("requirement two", () => {
  test("If the password is less than 8 characters", () => {
    const pass = null;
    const expected = "Password rejected";
    const outPut = verify(pass);

    expect(outPut).toEqual(expected);
  });
});

describe("requirement three", () => {
  test("If the password does not have at least 1 uppercase letter", () => {
    const pass = "ali12345";
    const expected = "Password rejected";
    const outPut = verify(pass);

    expect(outPut).toEqual(expected);
  });
});

describe("requirement four", () => {
  test("If the password does not have at least 1 number", () => {
    const pass = "aliAliAli";
    const expected = "Password rejected";
    const outPut = verify(pass);

    expect(outPut).toEqual(expected);
  });
});

describe("requirement five", () => {
  test("If the password is Ok", () => {
    const pass = "myPassword1";
    const expected = "Password accepted";
    const outPut = verify(pass);

    expect(outPut).toEqual(expected);
  });
});
