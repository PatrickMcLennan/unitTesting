const functions = require('./functions');

const {
  add,
  isNull,
  checkValue,
  createUser,
} = functions;
// to be value
test('Adds 2 + 2 to equal 4', () => {
  expect(add(2, 2)).toBe(4);
});
// to not be value
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(add(2, 2)).not.toBe(5);
});
//  test for null
test('Should Be Null', () => {
  expect(isNull()).toBeNull();
});
// test for falsy
test('Should be falsey', () => {
  expect(checkValue(null)).toBeFalsy();
});

test('User should be Patrick McLennan Object', () => {
  expect(createUser()).toEqual({
    firstName: 'Pat',
    lastName: 'McLennan',
  });
});
