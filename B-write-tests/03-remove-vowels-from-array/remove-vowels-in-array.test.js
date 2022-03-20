let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {

  // Arrange
  const words = ["Irina", "Etza", "Daniel"];
  const expectedResult = ["rn", "tz", "Dnl"];
   // Act
  const receivedResult = removeVowelsFromWords(words);
   // Assert
  expect(receivedResult).toEqual(expectedResult);
  
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
