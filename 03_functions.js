// Defining Functions
// Functions are defined using the 'function' keyword, followed by a name, parameters in parentheses, and a code block in curly braces.
// They enable code reusability by allowing the same code to be executed multiple times without rewriting it.
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// Functions can perform calculations and return values using the 'return' statement, which ends function execution.
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  console.log("This line won't execute as it's after return");
}
const res = addTwoNumbers(3, 5);
console.log("Result: ", res);

//A function expression is when you create a function as part of an expression that produces a value.
// Function expressions: Functions can be assigned to variables, allowing anonymous functions or storing functions in variables.
const greet = function () {
  console.log("Hello");
};

// Arrow functions: Provide a shorter syntax for writing functions, especially useful for simple expressions.
const add = (a, b) => a + b;

// Generator functions: Use the 'function*' syntax and 'yield' to create functions that can pause and resume execution.

// Function Parameters
// Parameters are variables listed in the function definition that act as placeholders for values passed when calling the function.
// If no argument is provided for a parameter, it defaults to undefined.
function loginUserMessage1(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage1()); // username is undefined

// Default parameters allow setting a default value for parameters if no argument is passed.
function loginUserMessage2(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage2()); // uses default "sam"

// Rest parameters, denoted by '...', collect all remaining arguments into an array, useful for handling variable numbers of arguments.
function calculateCartPrice1(...num1) {
  return num1;
}
console.log(calculateCartPrice1(200, 400, 500, 2000)); // [200, 400, 500, 2000]

// Rest parameters must be the last parameter and can be combined with regular parameters.
function calculateCartPrice2(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice2(200, 400, 500, 2000)); // [500, 2000]

// Arguments object: Provides access to all arguments passed to a function, useful when the number of parameters is unknown.
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6
