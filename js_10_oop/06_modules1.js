// JavaScript Modules
// Why Modules?
/*
Without modules, all JS files share the same global scope.
index.html
<script src="file1.js"></script><script src="file2.js"></script>
file1.js
let name = "Math";
file2.js
let name = "Sankar";

Console Error:
Uncaught SyntaxError:Identifier 'name' has already been declared
Reason:Both files declare the same global variable.
Modules solve this by giving each file its own private scope.
*/

// Named Export
// math.js
function add(a, b) {    return a + b;}export { add };
// add() can now be imported into other files.
// Named Import

// app.js
import { add } from "./math.js";
console.log(add(5, 7)); // 12

// "./" and "../"
/*
"./"  -> Current folder

"../" -> One folder up
*/

// Multiple Named Exports
// math.js
export function add() {}
export function subtract() {}
export function multiply() {}

// app.js
import { add, multiply } from "./math.js";


// Another Way to Write Named Export
// Method 1
function divide(a, b) {
    return a / b;
}
export { divide };
// Method 2
export function square(num) {
    return num * num;
}
// Both methods are correct.


// Default Export
/*
Use default export when the file mainly exists
to export one primary function, class, or object.
*/
// greet.js
export default function greet() {
    console.log("Hello");
}

// app.js
import greet from "./greet.js";

// Default imports do not use {}.
// Named Export vs Default Export
// Named Export
export function add() {}
// Import
import { add } from "./math.js";
// Default Export
export default function greet() {}
// Import
import greet from "./greet.js";

// Rename While Importing
// math.js
export function add(a, b) {
    return a + b;
}
// app.js
import { add as sum } from "./math.js";
console.log(sum(5, 6));

// Import Everything
// math.js
export function add() {}
export function multiply() {}
// app.js
import * as MathUtils from "./math.js";
MathUtils.add(5, 3);
MathUtils.multiply(2, 4);


// Default + Named Exports Together
// user.js
export default class User {}
export function login() {}
export function logout() {}
// app.js
import User, { login, logout } from "./user.js";
// User -> default export
// login & logout -> named exports


// Browser Requirement
// index.html
/*
<script type="module" src="app.js"></script>
*/
// Without type="module", imports and exports won't work.

// Module Scope
// math.js
let secret = 100;
// app.js
console.log(secret);
// ReferenceError
// Variables stay private unless exported.

// Why Modules?
/*
✔ Organize code into separate files.

✔ Prevent global variable collisions.

✔ Reuse code across projects.

✔ Make applications easier to maintain.
*/