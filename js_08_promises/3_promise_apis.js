const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1    rejected");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 2000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 4 rejected");
  }, 5000);
});
//Almost every Promise utility returns another Promise,thus we can use await with them to get the final result of the operation.
//e.g. await promise.race([p1, p2, p3]) will return the value of the first promise that is settled (resolved or rejected)
//Promise.all() returns a Promise that fulfills with an array of the resolved values of all input Promises,
//  preserving their original order.
// If any input Promise rejects, the returned Promise rejects immediately with that rejection reason.
Promise.all([p1, p2, p3])
  .then(function (values) {
    //if any of the promises is rejected,the output wwill be that error and the catch block will be executed
    //this behavior is called Fail-fast
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  });
Promise.all([
  Promise.resolve("A"),
  Promise.reject("Error"),
  Promise.resolve("C"),
]).catch(console.log); //error
// Promise.all() does not cancel the other Promises.
// If they are already running(for example, a network request), they continue running.
// It simply stops waiting for them because it already knows the final result must be a rejection.

Promise.race([p1, p2, p3]).then(function (value) {
  //it returns the value of the first promise that is settled (resolved or rejected)
  //that is returns the success or failure of the promise having least runtime
  //Promise.race() returns a Promise, but when that Promise fulfills, its resolved value is a single value, not an array.
  console.log(value);
});

Promise.any([p1, p2, p4])
  .then(function (value) {
    //it returns the value of the first promise that is resolved(suxccessful) and ignores the rejected promises
    //if all the promises are rejected, it will return an AggregateError
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
//promise 2 resolved

Promise.any([p1, p4])
  .then(function (value) {
    //it returns the value of the first promise that is resolved(suxccessful) and ignores the rejected promises
    //if all the promises are rejected, it will return an AggregateError
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
//aggregate error: All promises were rejected

Promise.allSettled([p1, p2, p3]).then(function (values) {
  //it waits for all the promises to be settled and returns an array of objects with the status and value or reason of each promise
  console.log(values);
});

//Instead of: ["A", "C"]
//it returns an array of objects.
//[{status: "fulfilled",value: "A" },{status: "rejected",reason: "B Error" },{status: "fulfilled", value: "C" }]
// Notice:
// A fulfilled Promise has: status value
// A rejected Promise has:  status reason
// Why is this useful?
// Imagine a dashboard that loads:
// User profile
// Notifications
// Weather
// News
// Advertisements
// Suppose:
// Profile ✔
// Notifications ✔
// Weather ❌
// News ✔
// Ads ❌
// Should the whole dashboard fail?No. You still want to show:
// Profile ✅
// Notifications ✅
// News ✅
// while maybe displaying: "Weather unavailable."
