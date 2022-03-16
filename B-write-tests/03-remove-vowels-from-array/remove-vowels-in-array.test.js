const removeVowelsFromWords = require('./remove-vowels-in-array');

test('remove vowels from all words in array', () => {
  const words = ['aeiuo', 'berkeli', 'barath', 'apple'];
  const expectedAnswer = ['', 'brkl', 'brth', 'ppl'];
  const receivedAnswer = removeVowelsFromWords(words);
  expect(receivedAnswer).toEqual(expectedAnswer);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
