let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const words = ["Code", "Your", "Future", "is", "amazing"];
  const expected = ["Cd", "Yr", "Ftr", "s", "mzng"];
  // Act
  const output = removeVowelsFromWords(words)
  // Assert
  expect(output).toEqual(expected)
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
