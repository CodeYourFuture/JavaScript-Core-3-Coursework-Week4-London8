let verify = require("./password-verifier");

test("If the password is less than 8 characters,  should return 'Password rejected'", () => {
  const input = "adsgd";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("If the password is null, should return 'Password rejected'", () => {
  const input = null;
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("If the password does not have at least 1 uppercase letter, should return 'Password rejected'", () => {
  const input = "egkdfhskj";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("If the password does not have at least 1 number, should return 'Password rejected'", () => {
  const input = "egkdfhskj";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});
