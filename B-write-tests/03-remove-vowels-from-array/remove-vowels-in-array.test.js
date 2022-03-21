let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];
  // Act
  const getVowels = removeVowelsFromWords(input);
  // Assert
  expect(getVowels).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
