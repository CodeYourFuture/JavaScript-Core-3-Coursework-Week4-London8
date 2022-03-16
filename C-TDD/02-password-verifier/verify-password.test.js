let verify = require("./verify-password");

test("return 'Password rejected' if password is less than 8 characters", function () {
  const input = "12gla";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("return 'Password accepted' if password is more or equals than 8 characters", function () {
  const input = "12gla!BRz";
  const output = "Password accepted";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("return 'Password rejected' if password is null", function () {
  const input = null;
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("return 'Password rejected' if password is all lowercase", function () {
  const input = "87rtnds9mf";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});

test("return 'Password accepted' if password has only one capital letter", function () {
  const input = "87Rtnds9mf";
  const output = "Password accepted";
  const result = verify(input);

  expect(result).toEqual(output);
});


test("return 'Password accepted' if password has numbers", function () {
  const input = "8Gk!mfnkpd";
  const output = "Password accepted";
  const result = verify(input);

  expect(result).toEqual(output);
});


test("return 'Password rejected' if password does not include numbers", function () {
  const input = "hGk!mfhkubc";
  const output = "Password rejected";
  const result = verify(input);

  expect(result).toEqual(output);
});