let passwordVerifier = require("./password-verify");

test("Password must be at least 8 characters long", () => {
  expect(passwordVerifier("aaa")).toEqual("Password Rejected");
});

test("Password must not be null", () => {
  expect(passwordVerifier(null)).toEqual("Password Rejected");
  expect(passwordVerifier()).toEqual("Password Rejected");
});

test("Password must have at least 1 uppercase letter", () => {
  expect(passwordVerifier("CodeYourFuture")).toEqual("Password Accepted");
  expect(passwordVerifier("codeyourfuture")).toEqual("Password Rejected");
});

test("Password must have at least 1 number", () => {
  expect(passwordVerifier("CodeYourFuture2022")).toEqual("Password Accepted");
  expect(passwordVerifier("CodeYourFuture")).toEqual("Password Rejected");
});
