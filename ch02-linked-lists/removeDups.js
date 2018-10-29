//Write code to remove dups from an unsorted linked list... object: O(n)
  
//How would you solve this problem if a buffer was not allowed?.. iterate twice: O(n^2)

const removeDups = (node) => {
  let values = {};
  let dupeRemoved = 0;

  //Loop through LL once and store all values as keys, incrementing count as they are traversed over
  while (node) {
    //Assumes they are integers so toString
    let nodeVal = node.val.toString();
    if (values[nodeVal]) {
      values[nodeVal] += 1;
    } else {
      values[nodeVal] = 1;
    }
    node = node.next;
  }

  //Loop through LL again, removing nodes whose count >1 and decrementing count in the process
  while (node) {
    let nodeVal = node.val.toString();
    if (values[nodeVal] > 1) {
      //Assume remove method exists for linked list
      node.remove();
      values[nodeVal] -= 1;
      dupesRemoved += 1;
    }
    node = node.next;
  }

  //No return value specified. I will just return the number of dupes found/removed.
  return dupeRemoved;
};

module.exports = removeDups;