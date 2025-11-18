// JavaScript Objects Part 2 - Practical Examples and Concepts

// 1. Object Literals: Creating objects using {} syntax with key-value pairs.
const user = {
  name: "John",
  age: 30,
  city: "New York",
};

// 2. Creating objects with new Object() or {}
// Both {} and new Object() create objects, but {} is preferred for simplicity.
const tinderUser = new Object(); // or {}
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// Adding properties dynamically.
console.log(tinderUser);

// 3. Property Access: Using dot notation and bracket notation to access properties.
console.log(user.name); // Dot notation: directly accesses property
console.log(user["age"]); // Bracket notation: useful for dynamic keys or special characters
// Interview experiment: What if key has spaces? console.log(user["full name"]) would work, but user.full name would error

// 4. Modifying Properties: Changing existing property values.
user.age = 31;
console.log(user.age); // 31

// 5. Nested objects: Objects can contain other objects as properties.
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname);

// 6. Merging objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Using spread operator: Copying and merging objects (used in React state updates).
const obj3 = { ...obj1, ...obj2 };
// Shallow copy - nested objects are shared references
console.log(obj3);

// Using Object.assign: Merging objects (alternative to spread, used in Node.js configs).
const obj5 = Object.assign({}, obj1, obj2, obj4);
console.log(obj5);
// Interview experiment: Shallow copy - nested objects are shared references
// const nested = { a: { b: 1 } }; const copy = { ...nested }; copy.a.b = 2; console.log(nested.a.b); // 2
// Deep copy alternatives: JSON.parse(JSON.stringify(obj)) or structuredClone(obj) in modern browsers

// 7. Array of objects: Common in APIs.
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "h2@gmail.com",
  },
  {
    id: 3,
    email: "h3@gmail.com",
  },
];
// Accessing array element property
console.log(users[1].email);

// 8. Object.keys/values/entries: Iterating over object properties (useful for data processing in Node.js).
console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); // ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser)); // [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]
// hasOwnProperty: Checks if the property is own property, not inherited.
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
// Interview experiment: hasOwnProperty vs 'in' operator - 'in' checks prototype chain too.

// 9. Object Destructuring: Extracting properties into variables (essential for React props).
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};
const { courseInstructor: instructor } = course;
// Renaming property during destructuring
console.log(instructor);

// More destructuring examples
const { name, age } = user;
console.log(name, age); // John 31
// Interview experiment: What if property doesn't exist? const { nonexistent } = user; // undefined
// Default values: const { name, age, email = "default@email.com" } = user;
// Nested destructuring: const { profile: { name } } = data;

// 10. JSON.stringify/parse: Converting objects to/from JSON strings (crucial for APIs in Node.js/Next.js).
const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"John","age":31,"city":"New York"}
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);

// Sample API response in JSON format
const apiResponse = {
  name: "hitesh",
  coursename: "js in hindi",
  price: "free",
};
// Parsing JSON string to object
const parsed = JSON.parse(JSON.stringify(apiResponse));
console.log(parsed);

// API can contain multiple JSON objects wrapped in an array
const apiArray = [{}, {}, {}];
console.log(apiArray);

// Interview experiment: JSON.stringify skips functions and undefined values
// const obj = { a: 1, b: undefined, c: () => {} }; JSON.stringify(obj); // {"a":1}
// Circular references cause error: const a = {}; a.self = a; JSON.stringify(a); // TypeError
// Use replacer function to customize serialization

// 11. Example of array of JSON objects
const jsonArray = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];
console.log(jsonArray[0].name); // Alice

// 12. Deep Cloning: Creating a complete copy of an object, including nested objects (basics to advanced).

// Basics: Shallow copy shares references to nested objects, deep copy creates independent copies.
// Why needed: To avoid unintended mutations in nested structures, common in React state or data manipulation.

// Method 1: JSON.parse(JSON.stringify(obj)) - Simple but limited.
// Pros: Easy, built-in.
// Cons: Skips functions, undefined, symbols; fails on circular references; converts Date to string.
const original = { a: 1, b: { c: 2 }, d: new Date() };
const shallow = { ...original }; // Shallow copy
shallow.b.c = 3; // Affects original.b.c
console.log(original.b.c); // 3 (shared reference)

const deep1 = JSON.parse(JSON.stringify(original));
deep1.b.c = 4; // Doesn't affect original
console.log(original.b.c); // 3
console.log(deep1.d);
console.log(typeof deep1.d); // String, not Date object

// Interview experiment: What happens with circular references?
// const circular = {}; circular.self = circular; JSON.parse(JSON.stringify(circular)); // TypeError

// Method 2: structuredClone(obj) - Modern, handles more types.
// Pros: Handles Date, Map, Set, circular references.
// Cons: Not supported in older browsers.
const deep2 = structuredClone(original);
deep2.b.c = 5;
console.log(original.b.c); // 3
console.log(deep2.d instanceof Date); // true

// Method 3: Custom recursive function - Advanced, full control.
// Handles circular references with a WeakMap.
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj); // Handle circular references

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }
  return clone;
}

const circularObj = { a: 1 };
circularObj.self = circularObj;
const deep3 = deepClone(circularObj);
console.log(deep3.self === deep3); // true (same reference in clone, but no error)

// Advanced: Performance considerations - JSON method is fast but limited; structuredClone is efficient; custom is flexible but slower.
// Use cases: Immutable data structures, cloning state in Redux, avoiding side effects in functions.
// Interview experiment: When to use each? JSON for simple objects, structuredClone for complex, custom for full control or polyfills.

// Optional: Additional Interview Concepts

// 13. Object.fromEntries: Creating objects from key-value pairs (reverse of Object.entries).
const entries = [
  ["a", 1],
  ["b", 2],
];
const fromEntriesObj = Object.fromEntries(entries);
console.log(fromEntriesObj); // { a: 1, b: 2 }
// Useful for converting Maps to objects or processing data.

// 14. Reflect API: Modern way to perform object operations (get, set, has, etc.).
const reflectObj = { x: 1 };
console.log(Reflect.get(reflectObj, "x")); // 1
Reflect.set(reflectObj, "y", 2);
console.log(reflectObj); // { x: 1, y: 2 }
// Interview experiment: Reflect methods return boolean for success/failure, unlike direct operations.

// 15. Proxy: Intercepting object operations (get, set, delete, etc.).
const proxyObj = { a: 1 };
const proxy = new Proxy(proxyObj, {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
    return true;
  },
});
proxy.b = 2; // Logs: Setting b to 2
console.log(proxy.a); // Logs: Getting a, then 1
// Interview experiment: Used for validation, logging, or virtual properties.

// 16. WeakMap/WeakSet: Collections that don't prevent garbage collection of keys.
const weakMap = new WeakMap();
let keyObj = { id: 1 };
weakMap.set(keyObj, "value");
console.log(weakMap.get(keyObj)); // value
keyObj = null; // Key can be garbage collected
// Interview experiment: WeakMap keys must be objects; useful for private data or caching.

// 17. Object.getOwnPropertyDescriptor/getOwnPropertyDescriptors: Get property descriptors.
const descObj = { prop: "value" };
const descriptor = Object.getOwnPropertyDescriptor(descObj, "prop");
console.log(descriptor); // { value: 'value', writable: true, enumerable: true, configurable: true }
// Interview experiment: Useful for inspecting or copying property behaviors.

// 18. Object.getPrototypeOf/setPrototypeOf: Get/set prototype (avoid in performance-critical code).
const protoObj = {};
const proto = { inherited: true };
Object.setPrototypeOf(protoObj, proto);
console.log(Object.getPrototypeOf(protoObj)); // { inherited: true }
console.log(protoObj.inherited); // true
// Interview experiment: __proto__ is deprecated; use Object methods instead.

// 19. Object Comparison with JSON.stringify: Simple deep equality check (not recommended for all cases).
const cmpObj1 = { a: 1, b: { c: 2 } };
const cmpObj2 = { a: 1, b: { c: 2 } };
console.log(JSON.stringify(cmpObj1) === JSON.stringify(cmpObj2)); // true
// Interview experiment: Fails with undefined, functions, or different key orders.
