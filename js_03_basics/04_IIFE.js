// Immediately Invoked Function Expressions (IIFE) syntax : (function(){ function body })();
(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// Arrow function IIFE synatx: ( () => { function body } )();
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh"); //notice how parameter is passed here

// It's a function that runs as soon as it's defined
// Why Use It? Two Main Reasons:
// 1. Avoid Polluting Global Scope (Most Important!)
// ❌ WITHOUT IIFE - variables leak to global scope
var score = 100;
var playerName = "John";
// Now 'score' and 'playerName' are global variables
// ✅ WITH IIFE - variables stay private
(function () {
  var score = 100;
  var playerName = "John";
  // These variables die after the function executes
})();

console.log(score); // undefined - doesn't exist outside!

//Why this matters: In large projects or when using multiple libraries,
//  global variables can clash and cause bugs.

//2. Create Private Variables
const counter = (function () {
  let count = 0; // Private variable - can't be accessed directly

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined - as it's a private variable and no such variable exists in the global object
//The count variable is private to the IIFE and can't be accessed directly from outside.
