//Functions create their own scope, meaning variables declared inside a function cannot be accessed from outside it.
// A function’s scope inherits from all outer (parent) scopes.
// A function in the global scope can access all global variables.
// A function defined inside another function can access:
// its parent function’s variables
// and any variables the parent itself can access.
// Parent scopes cannot access variables or functions defined inside an inner function.
// This one-way access provides encapsulation, protecting inner variables from being used elsewhere.

//++++++++++++++++++ scope of var, let, const ++++++++++++++++++
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 300;
  console.log("INNER: ", a);
}
// console.log(a);//300 as it shiould work
// console.log(b);//error as b(is a constant) is block scoped
// console.log(c);//surprisingly it works as var is not block scoped//output 300

//++++++++ Nseted functions and scope ++++++++++
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);//error as website is defined inside the previous function,having block scope
  two();
}
one();

//+++ kids can use mobile of parents, but parents cant use kids mobile +++
if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website); //hitesh youtube
    //the variable username is accessible here as it is defined in the parent scope
  }
  // console.log(website); //error as website is defined inside the inner if block, having block scope
}

// console.log(username);//error as username is defined inside the outer if block, having block scope

//+++++++++++++++++ hoisting ++++++++++++++++++
//In JavaScript, hoisting is a behavior where variable and function declarations are moved to the
// top of their containing scope during the compilation phase, before the code is executed. This means
//  that you can use variables and functions before they are declared in the code.
//!!!! but only works in case of function declaration not function expression ++++

console.log(addone(5)); //works as addone is a function declaration
function addone(num) {
  return num + 1;
}

addTwo(5); //error as addTwo is a function expression
const addTwo = function (num) {
  return num + 2;
};
