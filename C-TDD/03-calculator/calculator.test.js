let add = require("./calculator");

test("returns 0 if input is an empty string", () => {
  const input = "";
  const output = 0;
  const result = add(input);
  expect(result).toEqual(output);
});

test("returns 5 if input is '5' ", () => {
  const input = "5";
  const output = 5;
  const result = add(input);
  expect(result).toEqual(output);
});

test("returns 9 if input is '3,6' ", () => {
  const input = "3,6";
  const output = 9;
  const result = add(input);
  expect(result).toEqual(output);
});

test("returns 28 if input is '3,6,8,4,2,0,5' ", () => {
  const input = "3,6,8,4,2,0,5";
  const output = 28;
  const result = add(input);
  expect(result).toEqual(output);
});

test("returns 2 if input is '1001,2', ignore numbers larger than 1000", () => {
  const input = "1001,2";
  const output = 2;
  const result = add(input);
  expect(result).toEqual(output);
});

test("returns 0 if input is '1001', ignores numbers larger than 1000", () => {
  const input = "1001";
  const output = 0;
  const result = add(input);
  expect(result).toEqual(output);
});

test("throws on negatives", () => {
  const input = "1,-3,2";
  const result = add(input);

  expect(() => result.toThrowError("Negatives not allowed: -3"));
});
