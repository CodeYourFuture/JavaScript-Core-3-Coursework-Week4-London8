const passwordVerifier = require('./password-verify');

test('Password must be at least 8 characters long', () => {
  expect(passwordVerifier('aaa')).toEqual('Password Rejected');
});

test('Password must not be null', () => {
  expect(passwordVerifier(null)).toEqual('Password Rejected');
  expect(passwordVerifier()).toEqual('Password Rejected');
});

test('Password must have at least 1 uppercase letter', () => {
  expect(passwordVerifier('Berkeee2eli')).toEqual('Password Accepted');
  expect(passwordVerifier('berkeee2eli')).toEqual('Password Rejected');
});

test('Password must have at least 1 number', () => {
  expect(passwordVerifier('Berkeee2eli')).toEqual('Password Accepted');
  expect(passwordVerifier('Berkeeeeli')).toEqual('Password Rejected');
});
