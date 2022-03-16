const convertToOldRoman = require('./convert-to-old-roman');

test('returns I if passed 1 as an argument', () => {
  expect(convertToOldRoman(1)).toEqual('I');
});

test('returns II if passed 2 as an argument', () => {
  expect(convertToOldRoman(2)).toEqual('II');
});

test('returns V if passed 5 as an argument', () => {
  expect(convertToOldRoman(5)).toEqual('V');
});

test('returns VIIII if passed 9 as an argument', () => {
  expect(convertToOldRoman(9)).toEqual('VIIII');
});

test('returns X if passed 10 as an argument', () => {
  expect(convertToOldRoman(10)).toEqual('X');
});

test('returns XXII if passed 22 as an argument', () => {
  expect(convertToOldRoman(22)).toEqual('XXII');
});

test('returns XVIII if passed 18 as an argument', () => {
  expect(convertToOldRoman(18)).toEqual('XVIII');
});
