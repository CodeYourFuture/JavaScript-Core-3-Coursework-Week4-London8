let checkPassword = require("./password-verifier");

test("8 characters long password", () => {
  expect(checkPassword("1")).toEqual("Password rejected");
});

test("password NOT null", () => {
  expect(checkPassword(null)).toEqual("Password rejected");
  expect(checkPassword()).toEqual("Password rejected");
});

test("1 uppercase letter", () => {
  expect(checkPassword("Abcdefgh")).toEqual("Password accepted");
  expect(checkPassword("abcdefgh")).toEqual("Password rejected");
});

test("1 number", () => {
  expect(checkPassword("Abcdefg1")).toEqual("Password accepted");
  expect(checkPassword("Abcdefgh")).toEqual("Password rejected");
});
