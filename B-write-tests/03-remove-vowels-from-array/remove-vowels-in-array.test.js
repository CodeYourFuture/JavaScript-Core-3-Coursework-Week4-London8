let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  const words = ["aeiuo", "kate", "coding", "notgood"];
  const expectedAnswer = ["", "kt", "cdng", "ntgd"];
  const receivedAnswer = removeVowelsFromWords(words);
  expect(receivedAnswer).toEqual(expectedAnswer);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
