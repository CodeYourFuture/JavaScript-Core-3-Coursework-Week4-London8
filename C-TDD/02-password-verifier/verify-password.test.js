const verifyPassword = require("./verify-password");

test("verifyPassword() returns Password accepted if length of characters is 8 or more , if less then 8 return Password rejected", () => {
  expect(verifyPassword("Clementine89")).toEqual("Password accepted");
  expect(verifyPassword("sofia")).toEqual("Password rejected");
});

test("if input is null verifyPassword() returns Password accepted, else return Password rejected", () => {
  expect(verifyPassword(null)).toEqual("Password rejected");
});

test("if password includes at least 1 UpperCase character verifyPassword() returns Password accepted, else return Password rejected", () => {
  expect(verifyPassword("sally-salvador")).toEqual("Password rejected");
  expect(verifyPassword("MollyMac98")).toEqual("Password accepted");
});

test("if password includes at least 1 number verifyPassword() returns Password accepted, else return Password rejected", () => {
  expect(verifyPassword("Ahhdddyeast")).toEqual("Password rejected");
  expect(verifyPassword("macGreger1990")).toEqual("Password accepted");
});
