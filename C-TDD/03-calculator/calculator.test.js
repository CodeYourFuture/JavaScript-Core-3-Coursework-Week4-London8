let add = require("./calculator");

test("returns 0 if input is an empty string", () => {
  const input = "";
  const expected = 0;
  const result = add(input);
  expect(result).toEqual(expected);
});

test("returns 5 if input is '5' ", () => {
  const input = "5";
  const expected = 5;
  const result = add(input);
  expect(result).toEqual(expected);
});

test("returns 8 if input is '3,5' ", () => {
  const input = "3,5";
  const expected = 8;
  const result = add(input);
  expect(result).toEqual(expected);
});

test("returns 28 if input is '3,6,8,4,0,5' ", () => {
  const input = "3,6,8,4,0,5";
  const expected = 26;
  const result = add(input);
  expect(result).toEqual(expected);
});

test("returns 2 if input is '1001,2', ignore numbers larger than 1000", () => {
  const input = "1001,2";
  const expected = 2;
  const result = add(input);
  expect(result).toEqual(expected);
});

test("returns 0 if input is '1001', ignores numbers larger than 1000", () => {
  const input = "1001";
  const expected = 0;
  const result = add(input);
  expect(result).toEqual(expected);
});

test("throws on negatives", () => {
  expect(() => add("1,-3,2,-5").toThrowError("Negatives not allowed: -3, -5"));
});
