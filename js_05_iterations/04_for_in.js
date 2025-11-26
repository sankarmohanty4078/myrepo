const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Extra snippet: For...in with arrays (not recommended)
const arr = ["a", "b", "c"];
for (const index in arr) {
  console.log(`Index: ${index}, Value: ${arr[index]}`);
}

// Explanation: For...in iterates over enumerable properties, including inherited ones; for arrays, use for...of or traditional for loop for better performance and to avoid iterating over non-element properties.

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}
//map is a an object in js
//stores keys and values as given by the programmer
//each element of a mmap is an array and it has a key:value pair in it
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(`The value at the key ${key} is ${map[key]}`);
  //console.log();
}
