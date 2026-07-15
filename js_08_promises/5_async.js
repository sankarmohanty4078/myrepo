//Every async function ALWAYS returns a Promise.
async function greet() {
  console.log("Hello");
}
console.log(greet());
//output
//Hello
//Promise { fulfilled : undefined }

//if you return a value it gets wrapped inside a promise
//if you return a promise js doesn't wrap it
// async function name(){
//     return "Sankar";
// }
// becomes
// function name(){
//     return Promise.resolve("Sankar");
// }
//meanwhile
async function test() {
  return Promise.resolve(50);
} //Promise { fulfilled : 50 } returned from the function

//use of await
//await is a js keyword that can be used only inside an async function.Suppose a promise:
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}
//we'd write it w/o await like this:
getData().then((data) => {
  console.log(data);
});
////we'd write it with await like this:
async function displayData() {
  const data = await getData();
  //await says : ""Pause this async function, let the rest of the program continue,
  // and when the Promise settles, schedule the rest of this function as a microtask.""
  console.log(data);
}
display();

//problem to understand the execution timeline of async-await
function delay() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done"), 2000);
  });
}

async function test() {
  console.log("A");
  const result = await delay();
  console.log(result);
  console.log("B");
}

test();
console.log("C");
/*
steps of execution are:
1.Global Execution Context is created.
2.delay() and test() are created (not executed).
3.test() is called and pushed onto the Call Stack.
4.console.log("A") executes.
5.delay() is called.
A Promise is created synchronously.//as promise creation is synchronous
The Promise executor runs immediately.
setTimeout() registers a 2-second timer with the Web APIs.
The Promise is returned in the Pending state.
6.await receives the pending Promise.
Since the Promise isn't fulfilled yet:
The execution of test() is suspended.
The remaining code after await is saved for later.
test() is removed from the Call Stack.
7.Global execution continues.
console.log("C") executes.
Global execution finishes.,call stack is empty js engine is idle
8.After 2 seconds, the browser's timer expires.
The timer callback is moved from the Web APIs to the Task Queue.
9.The Event Loop moves the timer callback to the Call Stack.
The callback executes: resolve("Done");
The Promise changes from Pending → Fulfilled.
10.When the Promise is fulfilled, the continuation of the suspended async function is placed
in the Microtask Queue Not the Task Queue.
11.The Event Loop checks the Microtask Queue first.
It moves the continuation of test() to the Call Stack.
Execution resumes exactly after the await.
12.result receives "Done", Then:
console.log(result); , console.log("B"); are executed
final output:
A
C
Done
B
*/

// JavaScript is designed to be single - threaded and non - blocking.When await encounters a pending Promise,
// instead of keeping the current function on the Call Stack(which would block all other code), it suspends
// that async function, clears the Call Stack, and allows the Event Loop to continue executing other tasks.
// Once the Promise settles, the remaining part of the async function is queued as a microtask and resumes execution.
// Rule: await always resumes asynchronously, even if the awaited Promise is already fulfilled e.g. await Promise.resolve() suspends the function;