let verify = require("./verify-password");

test("return 'Password rejected' if password is less than 8 characters", function () {
  const input = "Vshort1";
  const result = verify(input);

  expect(result).toEqual("Password rejected");
});

test("return 'Password rejected' if password is lowercase only", function () {
  const input = "alllowercase";
  const result = verify(input);

  expect(result).toEqual("Password rejected");
});

test("return 'Password rejected' if password is null", function () {
  const input = null;
  const result = verify(input);

  expect(result).toEqual("Password rejected");
});

test("return 'Password rejected' if no numbers", function () {
  const input = "noNumbershere";
  const result = verify(input);
  expect(result).toEqual("Password rejected");
});

test("return 'Password accepted' if password is more or equals than 8 characters", function () {
  const input = "Password1";
  const result = verify(input);

  expect(result).toEqual("Password accepted");
});
