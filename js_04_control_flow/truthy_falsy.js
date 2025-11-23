//There are some expressions which evaluate to true or false in boolean context
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN , 0.0, -0.0, +0.0

//truthy values
// "0", 'false', " ", [], {}, function(){} (empty function with no return statement)
//any string with atleast one character is truthy

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//when interacting with databases we may get null or undefined values
// we can use nullish coalescing operator to assign default values in such cases
//bcz it is hard to handle null and undefined values in code

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
//alue returned from fucntion can be undefined if there is no return statement in it
//or if return statement is there but no value is returned e.g. return;

val1 = null ?? 10 ?? 20;
console.log(val1);

function returningNull() {
  let father_name_from_database = null;
  return father_name_from_database;
}
let val2 = returningNull() ?? "No father name found"; //as the function is returning null ,
// the right side value will be assigned to val2
console.log(val2);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
