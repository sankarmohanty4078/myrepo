// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log("Accessimng elements of the array:", myArr2);
console.log(myArr[1]);
console.log(myArr.at(5)); //modern way of accessing elements using at() method
console.log(myArr.at(6)); //undefined as there is no element at index 6
console.log(myArr.at(-1)); //accessing last element using at() method

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);

// --- Array: slice() vs splice() ---

/*
slice(start, end?)
- Returns a NEW array (does NOT mutate original)
- Copies elements from start up to but NOT including end
- start/end can be negative (counts from end)
*/
const arr1 = [10, 20, 30, 40, 50];
const sliced = arr1.slice(1, 4); //sliced = [20, 30, 40]
console.log(arr1); // [10, 20, 30, 40, 50] (unchanged)
console.log(arr1.slice(2)); // Expected output: Array [30, 40, 50]
console.log(arr1.slice(2, 4)); // Expected output: Array [30, 40]
console.log(arr1.slice(1, 5)); // Expected output: Array [20, 30, 40, 50]
console.log(arr1.slice(-2)); // Expected output: Array [40, 50]
console.log(arr1.slice(2, -1)); // Expected output: Array [30, 40]
console.log(arr1.slice()); // Expected output: Array [10, 20, 30, 40, 50]

/*
splice(start, n, ...itemsToAdd)
- MUTATES the original array
- Removes 'n' no. of items starting at "start"
- Inserts itemsToAdd (optional)
- Returns an array of removed elements
*/
const arr2 = [10, 20, 30, 40, 50];
const removed = arr2.splice(1, 2, "A", "B");
console.log(arr2); // [10, "A", "B", 40, 50]
console.log(removed); // [20, 30]

// Example requested:
// Remove 2 elements from index 0, insert "parrot", "anemone", "blue"
const arr3 = ["angel", "clown", "mandarin", "sturgeon"];
const removedarr1 = arr3.splice(0, 2, "parrot", "anemone", "blue");

console.log(arr3);
// ["parrot", "anemone", "blue", "mandarin", "sturgeon"]

console.log(removedarr1);
// ["angel", "clown"]
