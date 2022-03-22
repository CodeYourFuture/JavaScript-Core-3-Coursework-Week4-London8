const add = require("./calculator");

test("if the function receives an empty string it should return the sum of 0", function () {
  //Arrange
  const number = "";
  const expected = 0;
  //Act
  const total = add(number);
  //Assert
  expect(total).toEqual(expected);
});

test("if the function receives a negative number, it should return it back with a error message `Negative numbers not allowed: `", function () {
  //Arrange
  const numbers = "1, 5, -1";
  expect(() => {
    add(numbers);
  }).toThrow("Negative numbers not allowed:  -1");
});

test("if the function receives a number greater than 1000, it should ignore it", function () {
  //Arrange
  const number = "1, 4, 10, 1111";
  const expected = 15;
  //Act
  const total = add(number);

  //Assert
  expect(total).toEqual(expected);
});
