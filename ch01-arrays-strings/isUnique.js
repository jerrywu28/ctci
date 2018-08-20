const isUnique = (string) => {
  //Declare empty object which will be used to store string frequency data
  let countCharacters = {}
  //Create keys for each string (if they do not exist in object) and set frequency to 1. Add 1 if key exists already.
  string.split('').forEach(character => {
    if (!countCharacters.hasOwnProperty(character)) {
      countCharacters[character] = 1;
    } else {
      countCharacters[character] += 1;
    }
  })
  //Filters array of countCharacter's values to see if greater than 1. If so, not all characters are unique (return false).
  if (Object.values(countCharacters).filter(frequency => frequency > 1).length !== 0) {
    return false;
  }
  return true;
};

module.exports = isUnique;