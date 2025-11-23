// if
const isUserloggedIn = true;
const temperature = 41;
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==
//!== strict not equal to (value and type)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

//You can omit the curly braces {} for single statements following if
//or multiple statements can be combined using a comma operator (avoided for readability).

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  //true only if all conditions are true
  //if any one condition is false it will not check for other conditions
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  //true if any one condition is true
  //if first condition is true it will not check for second condition
  console.log("User logged in");
}
