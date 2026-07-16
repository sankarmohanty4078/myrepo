//Error Handling with async/await
// Before async/await, we wrote:

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//With async/await, we use something much cleaner:
function getData() {
  return Promise.reject("Server Error");
}

async function demo() {
  try {
    const result = await getData();

    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

demo(); //output : Server Error

//working: When an awaited Promise rejects, "await somePromise;" acts almost like :
//"throw rejectionReason;" inside the async function. That is why try...catch works.
//what happens if try..catch is not used:
// async functions always return a Promise.If an exception happens inside,
// JavaScript simply rejects that Promise.Think of it like this:
// async function demo(){
//     throw "Oops";
// }
// is almost equivalent to
// function demo(){
//     return Promise.reject("Oops");
// }

// So inside an async function, a single try...catch can handle:
// Normal JavaScript exceptions like ReferenceError variable x not found
// Rejected Promises from await like await Promise.reject("Server Error");

//finally block:
// finally always runs. Whether:
// Promise fulfills ✅
// Promise rejects ❌
// return executes
// An exception is thrown
// finally is guaranteed to execute.
// ex:
async function loadUser() {
  showSpinner();
  try {
    const user = await fetchUser();
    display(user);
  } catch (err) {
    showError(err);
  } finally {
    hideSpinner();
  }
}
// That's exactly what finally is meant for—cleanup.

//Interview programs:
async function demo() {
  try {
    return "Success";
  } finally {
    console.log("Finally");
  }
}
demo().then(console.log);
//output is :
//  Finally
//  Success

//Interview problem 2:
async function demo() {
  try {
    return "Success";
    //JS thinks "I need to return 'Success'."
    //But before returning, it must execute the finally block.
  } finally {
    return "Changed";
    //A return inside finally overrides any previous return or throw.
    //So JavaScript discards the earlier "Success" and replaces it with "Changed".
  }
}
demo().then(console.log);
//output is : Changed

////Interview problem 2:
function test() {
  try {
    throw new Error("Original Error");
  } finally {
    return "Recovered";
  }
}
console.log(test()); //Output: Recovered

// Avoid using return, throw, break, or continue inside a finally block unless you intentionally
// want to override the previous control flow.
// In production code, finally should almost always be used for cleanup:
// Close database connections
// Hide loading spinners
// Release resources
// Stop timers
// Remove event listeners
// —not for changing the function's return value.
