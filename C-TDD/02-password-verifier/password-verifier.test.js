let verify = require("./password-verifier");

const accepted = "Password accepted";
const rejected = "Password rejected";

test("Password is more than 8 characters", () => {
  let moreThanEight = verify("Asdfghjkl10");
  let lessThanEight = verify("Lkjh4");

  expect(moreThanEight).toEqual(accepted);
  expect(lessThanEight).toEqual(rejected);
});

test("Password is null", () => {
  let empty = verify();

  expect(empty).toEqual(rejected);
});

test("Password has 1 uppercase letter", () => {
  let upperCase = verify("abCdefghij10");
  let lowerCase = verify("abcdefghij10");

  expect(upperCase).toEqual(accepted);
  expect(lowerCase).toEqual(rejected);
});

test("Password has 1 number", () => {
  let withNumber = verify("dSagsergkd4l");
  let withoutNumber = verify("hjsdfefwaal");

  expect(withNumber).toEqual(accepted);
  expect(withoutNumber).toEqual(rejected);
});
