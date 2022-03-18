const add = require("./calculator");

test("returns 0 for an empty string", () => {
  const input = "";
  const output = 0;
  const result = add(input);

  expect(result).toEqual(output);
});

test("returns 5 if the inout is '5'", () => {
  const input = "5";
  const output = 5;
  const result = add(input);

  expect(result).toEqual(output);
});

test("returns 5 if the inout is '5'", () => {
  const input = "5, 3.6";
  const output = 9;
  const result = add(input);

  expect(result).toEqual(output);
});

test("Allow the `add` function to handle an unknown amount of numbers passed as an argument", () => {
  const input = "2, 8, 4.2, 0.5, 6.8, 2.4";
  const output = 24;
  const result = add(input);

  expect(result).toEqual(output);
});
