// ------------------------------------------------------------------
// Basic array + forEach demo
// (from here down, your ORIGINAL code is kept exactly as comments)
// ------------------------------------------------------------------

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);
//filter method is used to filter the array based on the condition
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

//doing the same thing with foreach
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

// ------------------------------------------------------------------
// Added practice + short explanations (loops + array methods)
// You already know Java loops, so this focuses on JS array style.
// ------------------------------------------------------------------

// Higher-order array methods: they take a function as an argument.
// forEach: great for side-effects (logging, pushing, etc.).
// map / filter: great for building NEW arrays from old ones.

const codingLangs = ["js", "ruby", "java", "python", "cpp"];

// forEach → just “do something” with every element
codingLangs.forEach((lang, index) => {
  // console.log(`#${index}: ${lang}`);
  // No returned array, just runs this callback for each element.
});

// map → transform each element into something new, returns new array
const upperLangs = codingLangs.map((lang) => lang.toUpperCase());
// console.log(upperLangs); // [ 'JS', 'RUBY', 'JAVA', 'PYTHON', 'CPP' ]

// filter → keep only items that match a condition, returns new array
const bigNums = myNums.filter((n) => n > 4);
// console.log(bigNums); // [5, 6, 7, 8, 9, 10]

// Same logic using forEach (more verbose, same result)
const bigNums2 = [];
myNums.forEach((n) => {
  if (n > 4) bigNums2.push(n);
});
// console.log(bigNums2);

// for...of → clean syntax to loop values directly (similar to enhanced for in Java)
for (const n of myNums) {
  if (n % 2 === 0) {
    // console.log(`even: ${n}`);
  }
}

// ------------------------------------------------------------------
// Extra object-array practice with books
// ------------------------------------------------------------------

// Get all science books (simple filter)
const scienceBooks = books.filter((bk) => bk.genre === "Science");
// console.log(scienceBooks);

// Get titles of books after 2000 (filter + map combo)
const recentBookTitles = books
  .filter((bk) => bk.publish >= 2000)
  .map((bk) => bk.title);
// console.log(recentBookTitles);

// Reduce: build a single result (here, count by genre)
const genreStats = books.reduce((acc, bk) => {
  acc[bk.genre] = (acc[bk.genre] || 0) + 1;
  return acc;
}, {});
// console.log(genreStats);

// Quick recap:
// - for / for..of: general loops (you already know this pattern from Java).
// - forEach: run a function for every element (no new array).
// - map: transform elements → new array.
// - filter: pick some elements → new array.
// - reduce: fold everything into one value (number, object, etc.).
