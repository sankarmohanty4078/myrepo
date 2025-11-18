// JavaScript Objects Revision Guide - Key Concepts for Modern Development (React, Node.js, Next.js, Interviews)

// 1. Symbol Keys: Using Symbol for unique, non-enumerable property keys.
//non-enumerable means it won't show up in for...in loops or Object.keys()
const mySym = Symbol("key1");
const objWithSymbol = {
  [mySym]: "uniqueValue",
  name: "Test",
};

// 2. Adding Methods: Functions as object properties.
user.greet = function () {
  console.log("Hello!");
};
user.greet(); // Hello!
// Interview experiment: console.log(user.greet) returns [Function (anonymous)] - the function reference
// console.log(user.greet()) returns undefined because the function doesn't return anything, just logs
// console.log(user.greet) vs user.greet() - former is reference, latter is execution

// 3. 'this' Keyword: Refers to the object itself within methods.
user.introduce = function () {
  console.log(`Hi, I'm ${this.name} from ${this.city}`);
};
user.introduce(); // Hi, I'm John from New York
// Interview experiment: What happens if we call user.introduce without parentheses? Returns function reference
// What if we do const greet = user.introduce; greet(); - 'this' becomes undefined in strict mode or window object
// Arrow functions don't have their own 'this', they inherit from parent scope

// 4. Object.freeze: Prevents adding, deleting, or modifying properties (applied after methods are added).
Object.freeze(user);
user.age = 32; // Won't change
console.log(user.age); // Still 31
// Interview experiment: Object.freeze() is shallow - nested objects can still be modified
// Object.seal() prevents adding/deleting but allows modification
// Object.preventExtensions() prevents adding new properties only

// 5. Object.assign: Merging objects (alternative to spread, used in Node.js configs).
const merged = Object.assign({}, user, { role: "admin" });
console.log(merged);

// 6. JSON.stringify/parse: Converting objects to/from JSON strings (crucial for APIs in Node.js/Next.js).
const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"John","age":31,"city":"New York"}
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);
// Interview experiment: JSON.stringify skips functions and undefined values
// const obj = { a: 1, b: undefined, c: () => {} }; JSON.stringify(obj); // {"a":1}
// Circular references cause error: const a = {}; a.self = a; JSON.stringify(a); // TypeError
// Use replacer function to customize serialization

// 7. Prototypes: Objects inherit from prototypes (foundation for classes).
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // true (inherited)

// 8. Constructor Functions: Creating objects with functions (pre-ES6 classes).
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 25);
console.log(person1);

// 9. Classes: Modern way to create objects with inheritance (used in React components).
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}
const user1 = new User("Bob", "bob@example.com");
console.log(user1.greet());

// 10. Getters and Setters: Controlling property access (useful for computed properties in React).
class Product {
  constructor(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (value > 0) this._price = value;
  }
}
const product = new Product(100);
console.log(product.price); // 100

// 11. Computed Property Names: Dynamic property keys using [].
const key = "dynamicKey";
const obj3 = {
  [key]: "value",
};
console.log(obj3.dynamicKey); // value

// 12. Optional Chaining: Safely accessing nested properties (prevents errors in React/Node.js).
//e.g in the following line if user or profile is undefined(means it doesn;t exist), it won't throw an error
const data = { user: { profile: { name: "Jane" } } };
console.log(data.user?.profile?.name); // Jane
console.log(data.user?.address?.city); // undefined (no error)

// 13. Nullish Coalescing: Providing defaults for null/undefined (used in config objects).
const config = { theme: null };
const theme = config.theme ?? "light";
console.log(theme); // light

// 14. Factory Functions: Functions that return objects (alternative to classes, popular in functional programming).
function createUser(name, role) {
  return {
    name,
    role,
    greet() {
      return `Hello, ${this.name}!`;
    },
  };
}
const admin = createUser("Admin", "administrator");
console.log(admin.greet());

// Optional: Additional Interview Concepts

// 15. Object.defineProperty: Defining properties with descriptors (configurable, enumerable, writable).
const obj = {};
Object.defineProperty(obj, "hidden", {
  value: "secret",
  enumerable: false, // Won't show in for...in or Object.keys
  writable: false,
  configurable: false,
});
console.log(obj.hidden); // secret
console.log(Object.keys(obj)); // [] (not enumerable)
// Interview experiment: Try deleting obj.hidden; // false, not configurable

// 16. Object.preventExtensions/isExtensible: Prevent adding new properties.
const extensibleObj = { a: 1 };
console.log(Object.isExtensible(extensibleObj)); // true
Object.preventExtensions(extensibleObj);
extensibleObj.b = 2; // Won't add
console.log(Object.isExtensible(extensibleObj)); // false

// 17. Object.isFrozen/isSealed: Check if object is frozen/sealed.
const frozenObj = { a: 1 };
Object.freeze(frozenObj);
console.log(Object.isFrozen(frozenObj)); // true
console.log(Object.isSealed(frozenObj)); // true (freeze implies seal)

// 18. Map vs Object: Map allows any key type, maintains insertion order, better for frequent additions/removals.
const map = new Map();
map.set("key", "value");
map.set(123, "number key");
console.log(map.get(123)); // number key
// Interview experiment: Object keys are strings/symbols; Map preserves key types.

// 19. Object Comparison: Objects are compared by reference, not value.
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false (different references)
console.log(obj1 == obj2); // false
// Deep equality requires custom function or libraries like lodash.
