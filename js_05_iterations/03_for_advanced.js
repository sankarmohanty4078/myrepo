// for of
//we get such type of data from apis and databases:
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(num);
}

// Extra snippet: Using for...of to iterate over a Set
const mySet = new Set([1, 2, 3, 4, 5]);
for (const value of mySet) {
  console.log(value); // Outputs: 1 2 3 4 5
}

// Explanation: For...of is perfect for iterating over iterable objects like arrays, sets, and maps without needing an index.

const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
//iterables in javascript are:
//e.g. arrays
// for (const [key, value] of myObject) {//error because object is not iterable

//     console.log(key, ':-', value);

// }
