const isUnique = require('./isUnique');

test('returns true', () => {
  expect(isUnique()).toBe(true);
  expect(isUnique()).toBe(false);
});
