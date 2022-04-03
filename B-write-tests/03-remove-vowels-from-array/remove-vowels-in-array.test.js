let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let inputArray = ["Irina", "Etza", "Daniel"];
  // Act
  let expectedWordsWithoutVowels = ["rn", "tz", "Dnl"];
  // Assert
  let wordsWithoutVowels = removeVowelsFromWords(inputArray);
  expect(wordsWithoutVowels).toEqual(expectedWordsWithoutVowels);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
