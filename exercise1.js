/**
 * Creates transform a list of numbers into a list of  objects.
 * @param {array} listOfNumbers - a list of numbers
 * @returns a  list of objects
 */
function transformToObjects(listOfNumbers) {
  let result = [];
  for (let number of listOfNumbers) {
    result.push({ val: number });
  }
  return result;
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------

// test 1
console.log(JSON.stringify(transformToObjects([1, 2, 3]))); // Should be [{val: 1}, {val: 2}, {val: 3}]
