// --------------------------------------------------------------
// ORIGINAL CODE (kept exactly as you wrote it)
// --------------------------------------------------------------
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//map is used when you need to do something with each element of the array
// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

// --------------------------------------------------------------
// ADDED EXPLANATIONS + EXTRA SNIPPETS (short + not overwhelming)
// You already know Java loops, so focus here is on JS high-order
// array functions (map, filter, reduce, etc.).
// --------------------------------------------------------------

// High-order array functions = functions that take another function
// as input (callback). Examples: map, filter, reduce, forEach.
// These are more expressive than manual loops.

// --------------------------------------------------------------
// Basic map usage
// --------------------------------------------------------------
const addedTen = myNumers.map((n) => n + 10);
// console.log(addedTen); // each element transformed

// map always returns a NEW array, never mutates the original
const doubled = myNumers.map((n) => n * 2);
// console.log(doubled);

// --------------------------------------------------------------
// Chaining map (very common in JS)
// --------------------------------------------------------------
// Each map receives the output of the previous one.
// Equivalent to method chaining in Java streams.
const processed = myNumers.map((n) => n * 3).map((n) => n - 1);
// console.log(processed);

// --------------------------------------------------------------
// Adding filter to the chain
// filter keeps only items that return true in callback.
// --------------------------------------------------------------
const filtered = myNumers.map((n) => n * 5).filter((n) => n > 20);
// console.log(filtered);

// --------------------------------------------------------------
// Compare forEach vs map quickly
// --------------------------------------------------------------
// forEach → just does something with each item (no returned array)
myNumers.forEach((n) => {
  // console.log("Saw number:", n);
});

// map → builds a new array
const squared = myNumers.map((n) => n * n);
// console.log(squared);

// --------------------------------------------------------------
// Using reduce with map/filter (extra useful pattern)
// --------------------------------------------------------------
const sumOfBigNumbers = myNumers
  .filter((n) => n >= 5)
  .map((n) => n * 10)
  .reduce((acc, val) => acc + val, 0);
// console.log(sumOfBigNumbers);

// Short recap:
// map → transform every element → new array
// filter → keep only elements that match a condition → new array
// reduce → compress entire array into one value
// All three are high-order array functions.
