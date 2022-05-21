const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange (input)
  // Act (calling the fn)
  // Assert (expected output value)
  let input = "Ellie";
  let output = greetPerson(input);
  let expectedOutput = "Hello Ellie";
  expect(output).toEqual(expectedOutput);
});

test("return Etza's name prefixed with Hello", () => {
  const input = "Etza",
  output = greetPerson(input),
  expectedOutput = "Hello Etza";
  expect(output).toEqual(expectedOutput);
});