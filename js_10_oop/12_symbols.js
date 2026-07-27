// SYMBOL

// Symbol is a primitive data type.

// Every Symbol is unique.

// Mainly used as unique object property keys to avoid
// accidental property name collisions.

// CREATING A SYMBOL

const id = Symbol();

const userId = Symbol("User ID");

// "User ID" is only a description for debugging.
// It DOES NOT make Symbols equal.

// typeof Symbol

const sym = Symbol();

console.log(typeof sym);

// Output:
// symbol

// EVERY SYMBOL IS UNIQUE

const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2);

// Output:
// false

// USING SYMBOL AS AN OBJECT KEY

const id1 = Symbol();

const user = {
  name: "Sankar",
  [id1]: 101,
};

console.log(user[id1]);

// Output:
// 101

// WHY [id] INSTEAD OF id ?

const id2 = Symbol();

const obj1 = {
  id2: 100,
};

console.log(obj1);

// Output:
// { id2: 100 }

// Here "id2" is treated as a normal string key.

const obj2 = {
  [id2]: 100,
};

console.log(obj2);

// Output:
// { Symbol(): 100 }

// Here the Symbol stored inside variable id2
// becomes the property key.

// SYMBOL KEYS DO NOT COLLIDE WITH STRING KEYS

const id3 = Symbol("id");

const person = {
  name: "Sankar",
};

person[id3] = 101;

person.id = 999;

console.log(person.id);
console.log(person[id3]);

// Output:
// 999
// 101

// These are two different properties.

// ACCESSING SYMBOL PROPERTY

const secret = Symbol();

const student = {
  [secret]: "MERN",
};

console.log(student[secret]);

// Output:
// MERN

console.log(student.secret);

// Output:
// undefined

// Dot notation looks for the string key "secret".
// The object actually contains a Symbol key.

// =======================================
// Symbol()
// =======================================

// Always creates a NEW unique Symbol.

const a = Symbol("user");
const b = Symbol("user");

console.log(a === b);

// Output:
// false

// =======================================
// Symbol.for()
// =======================================

// Uses the Global Symbol Registry.

const x = Symbol.for("user");
const y = Symbol.for("user");

console.log(x === y);

// Output:
// true

// If Symbol already exists in the registry,
// it returns the same Symbol.
// Otherwise it creates one and stores it.

// Symbol.keyFor()

const token = Symbol.for("login");

console.log(Symbol.keyFor(token));

// Output:
// login

const token2 = Symbol("login");

console.log(Symbol.keyFor(token2));

// Output:
// undefined

// Symbol() does not use the Global Symbol Registry.

// =======================================
// INTERVIEW QUESTION
// =======================================

const p = Symbol.for("id");
const q = Symbol("id");
const r = Symbol.for("id");

console.log(p === q);
console.log(p === r);
console.log(q === r);

// Output:
// false
// true
// false

// Explanation:

// p === q
// Symbol.for() and Symbol() never create the same Symbol.

// p === r
// Both use Symbol.for("id"), so they return the same Symbol
// from the Global Symbol Registry.

// q === r
// q is a new unique Symbol.
// r comes from the Global Symbol Registry.
// Therefore they are different.

// =======================================
// INTERVIEW SUMMARY
// =======================================

// Symbol()
// ✔ Primitive data type
// ✔ Always creates a new unique Symbol
// ✔ Does not use Global Symbol Registry
// ✔ Symbol.keyFor() returns undefined

// Symbol.for()
// ✔ Uses Global Symbol Registry
// ✔ Reuses existing Symbol if available
// ✔ Useful when multiple modules/files need the same Symbol
// ✔ Symbol.keyFor() returns the registry key

// WHEN TO USE

// Symbol()
// -> Private, unique object properties.

// Symbol.for()
// -> Shared Symbols across different modules/files
//    running in the same JavaScript environment.
