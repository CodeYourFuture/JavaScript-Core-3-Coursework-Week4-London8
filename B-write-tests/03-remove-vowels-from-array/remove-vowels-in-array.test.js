let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  const words = ["irina", "etza", "daniel"];
  const result = removeVowelsFromWords(words);
  const actualOutput = ["rn", "tz", "dnl"];

  expect(result).toEqual(actualOutput);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
