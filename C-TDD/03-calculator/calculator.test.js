let add = require("./add");

test("returns 0 if numbers is an empty string", () => {
  let input = "";
  let expected = 0;
  let result = add(input);
  expect(result).toEqual(expected);
});

test("returns number if numbers has 1 number", () => {
  let input = "100";
  let expected = 100;
  let result = add(input);
  expect(result).toEqual(expected);
});

test("returns sum of numbers if numbers has 2 numbers", () => {
  let input = "1,2";
  let expected = 3;
  let result = add(input);
  expect(result).toEqual(expected);
});

test("returns sum of numbers if numbers has than 2 numbers", () => {
  let input = "1,2,3";
  let expected = 6;
  let result = add(input);
  expect(result).toEqual(expected);
});

test("ignore numbers bigger than 1000", () => {
  let input = "1001,2";
  let expected = 2;
  let result = add(input);
  expect(result).toEqual(expected);
});
