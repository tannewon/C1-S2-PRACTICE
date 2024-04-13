// Let's say we have the following start code:
let numbers = [1, 2, 3, 4, 5];

// Add an element at the end of the array
numbers.push(6);

// Loop on all array elements
numbers.forEach(number => {
  console.log(number);
});

// Access to the array element with its index
console.log(numbers[2]); // Output: 3

// Remove an array element with its index
let indexToRemove = 2;
numbers.splice(indexToRemove, 1);

// Filter array elements
let filteredNumbers = numbers.filter(number => number % 2 === 0); // Keep only even numbers

// Transform each array element by applying a function on them
let doubledNumbers = numbers.map(number => number * 2); // Double each number
