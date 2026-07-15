Promise.resolve(5)
  .then((x) => {
    return x * 2;
  })
  .then((y) => {
    console.log(y);
  });
//explanation of above code:
// It does not directly pass 5 to the next .then().
// Instead,JavaScript creates another Promise.
// Create a NEW Promise
// ↓
// Fulfill it with the returned value
// ↓
// Pass that value to the next .then()
//if nothing is returned from a .then(), it will return undefined to the next .then().

//new problem
Promise.resolve(5)

  .then((x) => {
    console.log("A:", x); //5
    return x * 2;
  })

  .then((y) => {
    console.log("B:", y); //10
  })

  .then((z) => {
    console.log("C:", z); //undefined
  });

//new problem
Promise.resolve(100)

  .then((x) => {
    console.log("A");
    return x;
  })

  .then((x) => {
    console.log("B");
    throw new Error("Oops");
  })
  //as error encountered , catch() will be called and the control will be passed to catch() block
  //in between then() will be skipped and catch() will be called
  //catch() will handle the error and repair the chain by returning a promise with result:some_value to the next then() block
  .catch((err) => {
    console.log("C");
    return 500;
  })

  .then((x) => {
    console.log("D:", x);
  }); //it will return a promise with result:undefined to the next then() block

//new problem
Promise.resolve(5)

  .then((x) => {
    return Promise.resolve(x + 5);
  })

  .then((y) => {
    console.log(y);
  });

// Instead of
// Promise B
// Result = Promise
// JavaScript does
// Promise B
// Wait...
// ↓
// Returned Promise finishes
// ↓
// Result = actual value
// This is called Promise Flattening (or Promise Resolution).

//new problem
Promise.resolve().then(() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);

  Promise.resolve().then(() => {
    console.log("C");
  });

  console.log("D");
});
// solution: A D C B
// Promise.resolve executed in call stack and.thne() pushed to microtask queue
// eventually call back of.then() comes to callstack.A printed timerapi, 0ms timer ends,
// B printing callback in task queue waiting.then() pushed to microtask queue, D printed,
// callback of microtask queue pushed to callstack and C printed and after that callback of task queue pushed to call stack
// and B printed

/* types of things that can be returned from a .then() callback:

Callback finishes

        │
        ▼

What did it do?

──────────────────────────────
1)
return value
        │
        ▼
Next Promise ( Next promise means the promise that is about to be returned by the current .then() )
Fulfilled(value)

──────────────────────────────
2)
return Promise
        │
        ▼
Next Promise waits
for that Promise

──────────────────────────────
3)
throw Error
        │
        ▼
Next Promise
Rejected(error)

──────────────────────────────
4)
no return
        │
        ▼
Next Promise
Fulfilled(undefined)
*/
