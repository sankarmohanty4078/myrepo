// throttling.js

// Goal:
//
// Understand WHY throttling exists.
// Understand WHY every line exists.
// Build it from scratch instead of memorizing it.

//------------------------------------------------------
// Step 1
//------------------------------------------------------

function search(text) {
  console.log("Searching:", text);
}

// Imagine this function is called on every scroll event.

window.addEventListener("scroll", () => {
  search("Scrolling");
});

// While scrolling,
// the browser may fire hundreds of events every second.

// Output

// Searching...
// Searching...
// Searching...
// Searching...
// Searching...
// ...

// Problem

// Hundreds of expensive function calls.

//------------------------------------------------------
// Can Debounce Solve This?
//------------------------------------------------------

// Suppose debounce delay = 1000ms.

// User keeps scrolling.

// Scroll
// Scroll
// Scroll
// Scroll
// Scroll

// Every event

// ↓

// Cancels previous timer

// ↓

// Nothing executes until user stops scrolling.

// Good?

// NO.

// Imagine Google Maps.

// While dragging,
// the map should keep updating.

// It should NOT wait until
// the user stops dragging.

// Therefore,
// debounce is the wrong solution.

//------------------------------------------------------
// What do we actually want?
//------------------------------------------------------

// We want

// Execute immediately.

// Ignore future events
// for a fixed amount of time.

// Example

// Delay = 1000ms

// Scroll

// ↓

// Execute

// ↓

// Ignore events

// ↓

// After 1000ms

// Allow execution again.

// This is called

// THROTTLING.

//------------------------------------------------------
// Algorithm
//------------------------------------------------------

// Event occurs

// ↓

// Are we waiting?

// ↓

// Yes

// Ignore event.

// ↓

// No

// Execute function.

// ↓

// Start waiting.

// ↓

// After delay

// Stop waiting.

//------------------------------------------------------
// First Attempt
//------------------------------------------------------

function throttle(fn, delay) {
  let waiting = false;
}

// Question

// Why do we need

// waiting ?

// Because we must remember

// "Am I currently inside
// the cooldown period?"

//------------------------------------------------------
// Wrong Implementation
//------------------------------------------------------

function throttle(fn, delay) {
  return function () {
    let waiting = false;

    if (waiting) {
      return;
    }

    fn();

    waiting = true;
  };
}

// Why does this fail?

// First event

// waiting=false

// Function executes.

// waiting=true

// Returned function ends.

//------------------------------------------------------

// Second event

// A NEW variable is created.

// waiting=false again.

// Function executes AGAIN.

// waiting=true

// Returned function ends.

//------------------------------------------------------

// Third event

// waiting=false

// Executes AGAIN.

//------------------------------------------------------

// Therefore

// waiting never remains true.

// Every event executes.

// Throttling completely fails.

//------------------------------------------------------
// Correct Approach
//------------------------------------------------------

function throttle(fn, delay) {
  let waiting = false;

  return function () {};
}

// Why does this work?

const better = throttle(search, 1000);

// throttle() executes only once.

// Memory

// fn -------> search

// delay ----> 1000

// waiting --> false

// throttle() returns the inner function.

// Normally,
// local variables disappear.

// But the returned function still needs

// fn
// delay
// waiting

// Therefore JavaScript creates a CLOSURE.

//------------------------------------------------------
// Closure Memory
//------------------------------------------------------

// Closure

// fn ---------> search

// delay ------> 1000

// waiting ----> false

// This closure survives until
// better is garbage collected.

//------------------------------------------------------
// First Scroll Event
//------------------------------------------------------

better("A");

// Returned function executes.

// waiting = false

// Therefore

// if(waiting)

// becomes

// if(false)

// Function executes.

search("A");

// Now

waiting = true;

// Closure becomes

// waiting ----> true

// But...

// When should waiting become false again?

// We need a timer.

//------------------------------------------------------
// Using setTimeout()
//------------------------------------------------------

setTimeout(() => {
  waiting = false;
}, 1000);

// After one second

// Closure becomes

// waiting ----> false

// Now another event
// can execute.

//------------------------------------------------------
// Final Implementation
//------------------------------------------------------

function throttle(fn, delay) {
  let waiting = false;

  return function (...args) {
    if (waiting) {
      return;
    }

    fn(...args);

    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

//------------------------------------------------------
// Memory Timeline
//------------------------------------------------------

// Closure

// waiting ----> false

//------------------------------------------------------

// Event 1

// waiting=false

// ↓

// Execute

// ↓

// waiting=true

// ↓

// Timer starts

//------------------------------------------------------

// Event 2

// waiting=true

// ↓

// return

// Ignored

//------------------------------------------------------

// Event 3

// waiting=true

// ↓

// return

// Ignored

//------------------------------------------------------

// Timer finishes

// waiting=false

//------------------------------------------------------

// Next event

// Executes again.
