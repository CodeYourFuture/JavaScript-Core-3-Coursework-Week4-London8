let add = require("./calculator");

test("returns 0 for an empty string", () => {
  const input = "";
  const expected = 0;
  const outPut = add(input);

  expect(outPut).toEqual(expected);
});

test("returns 5 if the inout is '5'", () => {
  const input = "5";
  const expected = 5;
  const outPut = add(input);

  expect(outPut).toEqual(expected);
});

test("returns 5 if the inout is '5'", () => {
  const input = "5, 3.6";
  const expected = 9;
  const outPut = add(input);

  expect(outPut).toEqual(expected);
});

test("Allow the `add` function to handle an unknown amount of numbers passed as an argument", () => {
  const input = "2, 8, 4.2, 0.5, 6.8, 2.4";
  const expected = 24;
  const outPut = add(input);
  expect(outPut).toEqual(expected);
});
