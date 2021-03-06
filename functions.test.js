const functions = require('./functions');

const {
  add,
  isNull,
  checkValue,
  createUser,
  fetchUser,
} = functions;

const initDatabase = () => console.log('Starting Test...');
const closeDatabase = () => console.log('Test Complete');

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });
  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// to be value
test('Adds 2 + 2 to equal 4', () => expect(add(2, 2)).toBe(4));

// to not be value
test('Adds 2 + 2 to NOT equal 5', () => expect(add(2, 2)).not.toBe(5));

//  test for null
test('Should Be Null', () => expect(isNull()).toBeNull());

// test for falsy
test('Should be falsey', () => expect(checkValue(null)).toBeFalsy());

// to be equal type & value
test('User should be Patrick McLennan Object', () => {
  expect(createUser()).toEqual({
    firstName: 'Pat',
    lastName: 'McLennan',
  });
});

//  less than or equal to numbers
test('Should be under or equal 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//  Regex
test('There is no I in team', () => expect('team').not.toMatch(/I/i));

//  Arrays
test('Admin should be in usernames', () => {
  const userNames = ['John', 'Karen', 'admin'];
  expect(userNames).toContain('admin');
});

// Working with async data
test('User Fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return fetchUser()
    .then((data) => {
      expect(data.name).toEqual('Leanne Graham');
    });
});

// Async
test('User Fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
