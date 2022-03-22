const add = require("./calculator");

test("returns 0 if there is an empty string", () => {
  const input = "";

  const output = 0;

  const result = add(input);

  expect(result).toEqual(output);
});
