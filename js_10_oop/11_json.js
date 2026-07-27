// JSON (JavaScript Object Notation)

// JavaScript Object:
// Executable data structure used by JavaScript.

// JSON:
// Text format used for storing and transferring data.

// CONVERSION LIFECYCLE

// JavaScript Object
//        ↓ JSON.stringify()
// JSON String
//        ↓ Send/Store
// JSON String
//        ↓ JSON.parse()
// JavaScript Object

// JAVASCRIPT OBJECT

const user = {
  name: "Sankar",
  age: 22,
  isStudent: true,
};

// JSON

// {
//     "name":"Sankar",
//     "age":22,
//     "isStudent":true
// }

// DIFFERENCES

// Object
// ✔ Keys may or may not have quotes.
// ✔ Single or double quotes allowed.
// ✔ Can contain functions.
// ✔ Can contain undefined.
// ✔ Can have comments.

// JSON
// ✔ Keys MUST have double quotes.
// ✔ Strings MUST use double quotes.
// ✔ Cannot contain functions.
// ✔ Cannot contain undefined.
// ✔ Cannot contain comments.

// OBJECT -> JSON

const person = {
  name: "Sankar",
  age: 22,
};

const json = JSON.stringify(person);

console.log(json);
// {"name":"Sankar","age":22}

console.log(typeof json);
// string

// JSON -> OBJECT

const data = '{"name":"Sankar","age":22}';

const obj = JSON.parse(data);

console.log(obj);
// { name: "Sankar", age: 22 }

console.log(typeof obj);
// object

// FUNCTIONS ARE IGNORED

const user1 = {
  name: "Sankar",
  greet() {
    console.log("Hello");
  },
};

console.log(JSON.stringify(user1));

// Output:
// {"name":"Sankar"}

// UNDEFINED IS IGNORED

const user2 = {
  name: "Sankar",
  age: undefined,
  city: "BBSR",
};

console.log(JSON.stringify(user2));

// Output:
// {"name":"Sankar","city":"BBSR"}

// FUNCTION + UNDEFINED BOTH IGNORED

const user3 = {
  name: "Sankar",
  age: undefined,
  greet() {},
  city: "BBSR",
};

console.log(JSON.stringify(user3));

// Output:
// {"name":"Sankar","city":"BBSR"}

// VALID JSON

const validJSON = '{"name":"Sankar","age":22,"city":"BBSR"}';

JSON.parse(validJSON);

// INVALID JSON (Keys without quotes)

// {
//     name:"Sankar"
// }

// INVALID JSON (Single Quotes)

// {
//     'name':'Sankar'
// }

// INVALID JSON (Comments)

// {
//     // User Name
//     "name":"Sankar"
// }

// JSON.parse() WITH INVALID JSON

const invalid = "{name:'Sankar'}";

// JSON.parse(invalid);

// Throws SyntaxError because it is not valid JSON.

// WHEN TO USE JSON.stringify()

// ✔ Before sending data to a server.
// ✔ Before storing data in Local Storage.
// ✔ Before writing data into a file.

// WHEN TO USE JSON.parse()

// ✔ After receiving data from an API.
// ✔ After reading from Local Storage.
// ✔ After reading JSON from a file.

// INTERVIEW SUMMARY

// JSON.stringify()
// ✔ Object -> JSON String
// ✔ Returns String
// ✔ Ignores Functions
// ✔ Ignores undefined

// JSON.parse()
// ✔ JSON String -> Object
// ✔ Returns Object
// ✔ Throws SyntaxError for invalid JSON

// MOST COMMON REAL-LIFE FLOW

const order = {
  item: "Burger",
  quantity: 2,
};

// Object -> JSON String
const orderJSON = JSON.stringify(order);

// JSON String -> Object
const receivedOrder = JSON.parse(orderJSON);

console.log(receivedOrder);
