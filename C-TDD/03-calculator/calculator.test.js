const add = require("./calculator");

/* - The numbers argument is a comma separated list of numbers as a string, and can contain 0, 1 or 2 numbers, e.g. `""` or `"5"` or `"3,6"`
- The function will return their sum and for an empty string it will return 0, e.g. `""` will return `0`, `"5"` will return `5`, `"3,6"` will return `9`.
- Start with the simplest test case of an empty string and move to 1 and then two numbers.
- Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
- Remember to refactor after each passing test. */

test("returns 0 when number is an empty string", () => {
  const number = "";
  const expected = 0;
  const output = add(number);
  expect(output).toEqual(expected)
}) 

test("returns 7 when number is 7", () => {
  const number = "7";
  const expected = 7;
  const output = add(number);
  expect(output).toEqual(expected);
}); 

test("returns 17 when number is '8,9'", () => {
  const number = "8,9";
  const expected = 17;
  const output = add(number);
  expect(output).toEqual(expected);
}); 
test("returns 27 when number is '8,9,10'", () => {
  const number = "8,9,10";
  const expected = 27;
  const output = add(number);
  expect(output).toEqual(expected);
}); 

test("returns 2 when number is '2,1001'", () => {
  const number = "2, 1001";
  const expected = 2;
  const output = add(number);
  expect(output).toEqual(expected);
}); 

test("returns 0 when number is '2090,1001'", () => {
  const number = "2090, 1001";
  const expected = 0;
  const output = add(number);
  expect(output).toEqual(expected);
}); 

test("returns an error when number is '7,-9,8'", () => {
  function addNegatives() {
    add("7,-9,8")
  }
  expect(addNegatives).toThrowError(new Error("negatives not allowed: -9"));
}); 

test("returns an error when number is '-7,9,8'", () => {
  function addNegatives() {
    add("-7,9,8");
  }
  expect(addNegatives).toThrowError(new Error("negatives not allowed: -7"));
}); 

test("returns an error when number is '-7,-9,8'", () => {
  function addNegatives() {
    add("-7,-9,8");
  }
  expect(addNegatives).toThrowError(new Error("negatives not allowed: -7, -9"));
}); 
