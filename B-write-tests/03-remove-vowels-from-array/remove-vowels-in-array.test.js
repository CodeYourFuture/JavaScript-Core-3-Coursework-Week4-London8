let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  expect(removeVowelsFromWords(["Irina", "Etza", "Daniel"])).toEqual([
    "rn",
    "tz",
    "Dnl",
  ]);
  expect(removeVowelsFromWords(["Code", "Your", "Future"])).toEqual([
    "Cd",
    "Yr",
    "Ftr",
  ]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
