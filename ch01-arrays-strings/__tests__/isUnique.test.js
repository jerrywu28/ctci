const isUnique = require('../isUnique');

test('isUnique should be defined', () => {
  expect(isUnique).toBeDefined;

test('isUnique should return true for a string of unique characters', () => {
  expect(isUnique('dog')).to.equal(true);

test('isUnique should return false for a string containing repeating characters', () => {
  expect(isUnique('doggo')).to.equal(false);

})
});