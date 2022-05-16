let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const words = ["Code", "Your", "Future"];
  const expected = ["Cd", "Yr", "Ftr"];
  // Act
  const output = removeVowelsFromWords(words)
  // Assert
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
