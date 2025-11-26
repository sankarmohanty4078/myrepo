const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//only reference if the function is pased not the function that is printMe()

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// Extra snippet: forEach with index and array parameters
myCoding.forEach((item, index, arr) => {
  console.log(`Item ${index + 1} of ${arr.length}: ${item.languageName}`);
});

// Explanation: forEach provides access to the current element, its index, and the entire array, useful for logging or side effects without creating a new array.

myCoding.forEach((item) => {
  //each item is a number
  console.log(item);
  console.log(item.languageName);
  console.log(item.languageFileName);
});

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

map.forEach((obj) => {
  console.log(
    `The value at the key ${obj.languageName} is ${map[obj.languageFileName]}`
  );
  //console.log();
});
