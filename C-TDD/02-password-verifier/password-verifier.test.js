let verify = require("./password-verifier");

test("Returns 'Password rejected', if the password is less than 8 characters", () => {
  const input = "djsfg";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("Returns 'Password rejected', if the password is null", () => {
  const input = null;
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("Returns 'Password rejected, if the password does not have at least 1 uppercase letter", () => {
  const input = "djsfgerdt";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("Returns 'Password rejected, if the password does not have at least 1 number", () => {
  const input = "djsfgerdt";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("Returns 'Password accepted', if the password is more than 8 characters, if the password does have at least 1 uppercase letter, if the password does have at least 1 number and if the passaword is !null", () => {
  const input = "D3jsfgetop";
  const output = "Password accepted";
  const result = verify(input);

  expect(result).toEqual(output);
});
