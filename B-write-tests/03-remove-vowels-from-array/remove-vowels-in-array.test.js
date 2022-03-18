let removeVowelsFromWords = require("./remove-vowels-in-array");

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
test("remove vowels from all words in array", () => {
  const person = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];

  const output = removeVowelsFromWords(person);

  expect(output).toEqual(expected);
});
