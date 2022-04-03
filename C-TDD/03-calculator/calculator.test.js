const add = require("./calculator");

test("returns 0 if input is empty", function () {
  const input = "";
  const output = 0;
  const result = add(input);
  expect(result).toEqual(output);
});
test("returns the number if input is one number", function () {
  const input = "5";
  const output = 5;
  const result = add(input);
  expect(result).toEqual(output);
});
test("returns sum of number if input is two numbers", function () {
  const input = "3,6";
  const output = 9;
  const result = add(input);
  expect(result).toEqual(output);
});
test("returns sum of number if input is unknown numbers", function () {
  const input = "3,6,2,5,6,7";
  const output = 29;
  const result = add(input);
  expect(result).toEqual(output);
});
test("throws error", function () {
  expect(() => add("-1").toThrowError("negatives not allowed"));
});
test("numbers bigger than 1001 are ignored", function () {
  expect(add("1001,2")).toEqual(2);
});
