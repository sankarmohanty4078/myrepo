// debounce.js
// Goal:
// Understand why every line of debounce exists instead of memorizing it.

// Step 1
function search(text) {
  console.log("Searching:", text);
}

// Normally
search("Java");
// Output
// Searching: Java

// If every key press calls search()
search("J");
search("Ja");
search("Jav");
search("Java");

// Output

// Searching: J
// Searching: Ja
// Searching: Jav
// Searching: Java

// Problem:
// We made 4 API requests.
// We only wanted the last one.

// Step 2

// Delay execution

setTimeout(() => {
  search("Java");
}, 300);

// Good.

// But if user types again before 300ms,
// the previous timer should be cancelled.
// Therefore we need clearTimeout().

// Step 3
// Where do we store the timeout id?
let timer;
timer = setTimeout(() => {}, 300);

// Suppose browser returns
// timer = 5
// Next key press
clearTimeout(timer);
// Works.
// Question:
// Where should timer be declared?

// Wrong Implementation

function debounce(fn, delay) {
  return function () {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

// Why does this fail?
// First key press
// timer = undefined
// timer becomes 1
// Second key press
// A NEW timer variable is created.
// timer = undefined again.
// Previous timer (1) is lost forever.
// Therefore nothing gets cancelled.
// Every timeout executes. Debouncing fails.

// Correct Implementation
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);

    timer = setTimeout(fn, delay);
  };
}

// Why does this work?
const better = debounce(search, 300);
// debounce() executes only ONCE.
// Memory
// fn ------> search
// delay ---> 300
// timer ---> undefined
// debounce() returns the inner function.
// Normally these local variables disappear.
// But the returned function still needs
// fn
// delay
// timer

// JavaScript therefore creates a CLOSURE.
// Closure Memory
// Closure
// fn -------> search
// delay ----> 300
// timer ----> undefined

// This closure stays alive until
// 'better' is garbage collected.

// First Key Press
better("J");
// Returned function executes.
// timer = undefined
// clearTimeout(undefined)
// Nothing happens.
// New timeout created.
// Suppose browser returns
// timer = 7
// Closure now becomes
// timer = 7
// Second Key Press
better("Ja");
// Same closure is reused.
// timer = 7
// clearTimeout(7)
// Timeout 7 is cancelled.
// New timeout created.
// Suppose browser returns
// timer = 8
// Closure becomes
// timer = 8
// Third Key Press
better("Jav");
// timer = 8
// clearTimeout(8)
// timer = 9
// Only timeout 9 survives.
// After 300 ms
// search("Jav") executes.
// Why return another function?

// Wrong
function debounce(fn, delay) {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(fn, delay);
}

//Now in DOM : input.addEventListener("input", debounce(search, 300));
//After the input event, debounce() executes
// A timer is created.
// After 300 ms search() runs once.
// Then debounce() is completely finished.
// It disappears from the call stack.Memory is released.
// debounce()
//    │
//    ▼
// finished
// That returned function executes
// every time the event occurs.
//What gets attached to addEventListener? Remember, addEventListener("input", debounce(search,300));
// expects a function. But your debounce returned nothing because there is no return in debounce().
// So JavaScript actually sees addEventListener("input", undefined);
// Meaning No event listener is attached.
// User starts typing "Ja"
// Browser asks: "Which function should I execute?"
// There isn't one. Nothing happens.
//Thus search works for the input "J" for only once and it is not an expected behaviour.

//next question:
// Why arguments / ...args ?
function search(text) {
  console.log(text);
}

const betterSearch = debounce(search, 300);
//The returned function is
// function (...args) {
//     console.log(args);
// }
// and JavaScript stores it in
//   betterSearch

betterSearch("Java");
//so betterSearch("Java") is internally converted to
// function (...args) {
//     console.log(args);}

// How does the inner function receive "Java"?
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    console.log(args);
  };
}

// args
// ["Java"]
// fn(...args) becomes
// search("Java")

//

// Why context (this)?

const obj = {
  name: "Sankar",

  print: function () {
    console.log(this.name);
  },
};

// Normal call
obj.print();
// Sankar
// But
setTimeout(obj.print, 1000);
// Output
// undefined
// Because
// setTimeout() calls print()
// instead of obj.print()
// Therefore 'this' changes.
// Older implementations save
const context = this;
// so the original object is preserved.

// Why apply() ?
// Older implementation
fn.apply(context, args);
// Means
// Call fn using
// this = context and
// pass all arguments.

// Modern React code usually uses
fn(...args);
// because React rarely depends
// on dynamic 'this'.

// Final Implementation
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Interview Questions
// 1. Why must timer be outside the returned function?
// 2. What breaks if timer is inside the returned function?
// 3. Why is a closure required?
// 4. Why does debounce() return another function?
// 5. What is stored inside the closure?
// 6. Why did older implementations use
//    fn.apply(context,args)
//    instead of
//    fn(...args)?
// 7. Do these share the same timer?
const d1 = debounce(search, 300);
const d2 = debounce(search, 300);
// Why or why not?
