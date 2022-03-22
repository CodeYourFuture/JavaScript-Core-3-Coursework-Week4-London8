let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  const words = ["aeiuo", "kate", "coding", "notgood"];
  const expected = ["", "kt", "cdng", "ntgd"];
  const output = removeVowelsFromWords(words);
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
