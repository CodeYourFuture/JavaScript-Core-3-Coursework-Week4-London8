let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
   expect(removeVowelsFromWords(["Irina", "Etza", "Daniel"])).toEqual(["rn", "tz", "Dnl"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
