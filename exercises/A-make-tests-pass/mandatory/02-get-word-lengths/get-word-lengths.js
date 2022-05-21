module.exports = function getWordLengths(someWords) {
  /* Implement the function to make the tests pass */
  let numOfChar = [];
  for (let word of someWords) {
    numOfChar.push(word.length);
  }
  return numOfChar;
};
