const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from Ellie", () => {
  // Arrange
  // Act
  // Assert
  let input = "Ellie",
  result = removeVowels(input),
  expected = "ll";

  expect(result).toEqual(expected);
});

// Edge Cases

test("remove vowels from an empty string", () => {
  let input = "",
  result = removeVowels(input),
  expected = "";

  expect(result).toEqual(expected);
})

test("remove vowels from samuel", () => {
  const input = "samuel",
  output = removeVowels(input),
  expectedOutput = "sml";

  expect(output).toEqual(expectedOutput);
})
