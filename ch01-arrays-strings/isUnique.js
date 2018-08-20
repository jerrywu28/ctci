const isUnique = (string) => {
  let countCharacters = {}

  //Build up countCharacters object to keep count of unique keys
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