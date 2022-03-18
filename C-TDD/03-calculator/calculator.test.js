let add = require("./calculator");

test("Zero numbers", () => {
  let emptyString = add("");

  expect(emptyString).toEqual("");
});

test("One number", () => {
  let sumOfOne = add("1");
  let sumOfFive = add("5");

  expect(sumOfOne).toEqual("1");
  expect(sumOfFive).toEqual("5");
});

test("Two numbers", () => {
  let sumOfTwo = add("1, 1");
  let sumOfSeven = add("5, 2");

  expect(sumOfTwo).toEqual("2");
  expect(sumOfSeven).toEqual("7");
});

test("Three numbers", () => {
  let sumOfSix = add("1, 2, 3");
  let sumOfTwelve = add("5, 4, 3");

  expect(sumOfSix).toEqual("6");
  expect(sumOfTwelve).toEqual("12");
});
