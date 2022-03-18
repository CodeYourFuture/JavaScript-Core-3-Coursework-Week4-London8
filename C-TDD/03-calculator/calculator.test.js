let add = require("./calculator");

test("Should return 0 for empty strings", () => {
  expect(add("")).toEqual(0);
});

test("Should return same number if 1 number is passed", () => {
  expect(add("1")).toEqual(1);
  expect(add("1,")).toEqual(1);
});

test("Should add 2 numbers", () => {
  expect(add("1,2")).toEqual(3);
  expect(add("5,9")).toEqual(14);
});

test("Should add more than 2 numbers", () => {
  expect(add("1,2,3,5")).toEqual(11);
  expect(add("5,9,66,77")).toEqual(157);
});

test("Should ignore big numbers", () => {
  expect(add("1,1001")).toEqual(1);
  expect(add("1,1000")).toEqual(1001);
});

test("Should throw error for negative numbers", () => {
  expect(() => add("1,-1,3")).toThrowError("Negative numbers not allowed: -1");
});
