// Why Default Export?
/*
A default export tells other developers: "This is the main thing this file exists for."
Use it when a file has one primary function, class, or object.
*/

// Example - Button.js
export default function Button() {
    console.log("Button Component");
}
// app.js
import Button from "./Button.js";
// Reads naturally:
// Import Button from Button.js

// Another Example
// calculateTax.js
export default function calculateTax(price) {
    return price * 0.18;
}
// app.js
import calculateTax from "./calculateTax.js";
// The file mainly exists to calculate tax.

// Real-life Analogy
/*
Imagine Gmail. The main purpose of Gmail is: ✉️ Sending and receiving emails.
But Gmail also provides:
📅 Calendar
📞 Meet
💬 Chat
📁 Drive
The primary purpose is Email.Similarly,
default export -> Main feature
named exports -> Supporting features
*/

// Why Allow Named Exports in the Same File?
/*
A file may have one main feature,
but it can also contain helper functions
that other files may need.
*/
// auth.js
export default function login(username, password) {
    console.log("Logging in...");
}
export function validateEmail(email) {
    return email.includes("@");
}
export function hashPassword(password) {
    return "hashed_" + password;
}
// app.js
import login, {
    validateEmail,
    hashPassword
} from "./auth.js";

/*
login()          -> Main feature (default export)

validateEmail()  -> Helper function

hashPassword()   -> Helper function
*/

// Why Keep Default Exports?
/*
Default exports make sense when a file has
one obvious primary purpose.
*/
// Navbar.js
export default function Navbar() {}
// Footer.js
export default function Footer() {}
// Sidebar.js
export default function Sidebar() {}
// app.js
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar.js";
/*
Each file mainly exports one component,
so default exports keep imports clean and readable.
*/

// Math.js Scenario
/*
Suppose math.js contains:
add()
subtract()
multiply()
divide()

Should one of them be the default export?
No.
None of these functions is more important than the others.
The file exists to provide a collection of math utilities.
*/

// math.js
export function add(a, b) {}
export function subtract(a, b) {}
export function multiply(a, b) {}
export function divide(a, b) {}

// app.js
import { add, divide } from "./math.js";
// OR
import * as MathUtils from "./math.js";
MathUtils.add(2, 3);
MathUtils.divide(10, 2);
/*
For utility files like math.js,
named exports are usually the better choice.
*/

// Rule of Thumb
/*
Ask yourself: "Does this file have one obvious primary export?"
YES -> Consider a default export.
NO -> Use named exports.
*/