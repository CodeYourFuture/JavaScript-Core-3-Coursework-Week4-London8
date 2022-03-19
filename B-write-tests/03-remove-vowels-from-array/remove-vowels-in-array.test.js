let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  const arrayOfNames = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];
  const output = removeVowelsFromWords(arrayOfNames);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
