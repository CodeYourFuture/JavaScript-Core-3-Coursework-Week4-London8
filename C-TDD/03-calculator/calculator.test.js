const calculator = require("./calculator");

test("if calculator input is empty returns 0", () => {
  expect(calculator("")).toEqual(0);
});

test("if calculator input is has two numbers returns sum of them ", () => {
  expect(calculator("2,9")).toEqual(11);
  expect(calculator("0,4")).toEqual(4);
});

test("Numbers bigger than 1000 should be ignored, so adding 2 + 1001  returns '2'", () => {
  expect(calculator("2,1001")).toEqual(2);
});

test("Input with a negative number will throw an error 'Negative numbers not allowed:'", () => {
  expect(() =>
    calculator("3,-4,8").toThrowError("Negative numbers not allowed:-4")
  );
});
