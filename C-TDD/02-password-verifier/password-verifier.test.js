let verify = require("./password-verifier");

test("returns password rejected if password is less than 8 characters", function () {
  input = "asdf";
  expect(verify(input)).toEqual("Password rejected");
});

test("returns password rejected if password is null", function () {
  input = null;
  expect(verify(input)).toEqual("Password rejected");
});

test("returns password rejected if password doesn't include uppercase letters", function () {
  expect(verify("asdfghjkl1")).toEqual("Password rejected");
  expect(verify("Asdfghjkl1")).toEqual("Password excepted");
});

test("returns password rejected if password has no numbers", function () {
  expect(verify("asdfghjkl1")).toEqual("Password rejected");
  expect(verify("Asdfghjkl")).toEqual("Password rejected");
  expect(verify("Asdfghjkl1")).toEqual("Password excepted");
});
