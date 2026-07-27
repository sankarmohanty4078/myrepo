// SET

// Stores only UNIQUE values.
// Duplicate values are automatically ignored.

// CREATE A SET

const set1 = new Set();

const set2 = new Set([10, 20, 30]);

// ADD VALUES

set1.add(10);
set1.add(20);
set1.add(30);

// DUPLICATES ARE IGNORED

const nums = new Set();

nums.add(10);
nums.add(10);
nums.add(10);

console.log(nums); // Set(1) {10}

// CHECK VALUE

console.log(nums.has(10)); // true

// DELETE VALUE

nums.delete(10);

// SIZE (Property, NOT function)

console.log(nums.size);

// CLEAR ENTIRE SET

nums.clear();

// REMOVE DUPLICATES FROM ARRAY (Most Common Use)

const arr = [1, 2, 2, 3, 3, 4];

const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1,2,3,4]

// ARRAY -> SET

const set = new Set(arr);

// SET -> ARRAY

const newArr = [...set];

// SET CAN STORE

const s = new Set();

s.add(10); // Number
s.add("JS"); // String
s.add(true); // Boolean
s.add([1, 2]); // Array
s.add({ id: 1 }); // Object
s.add(function () {}); // Function

// OBJECT REFERENCE BEHAVIOUR

const obj = { id: 1 };

const users = new Set();

users.add(obj);
users.add(obj);

console.log(users.size); // 1

// DIFFERENT OBJECTS

const people = new Set();

people.add({ id: 1 });
people.add({ id: 1 });

console.log(people.size); // 2

// ITERATING A SET

const marks = new Set([90, 80, 70]);

for (const value of marks) {
  console.log(value);
}

//problem : convert the folowing array to an array with no duplicates
//solution in one line:
const uniqueNames = [...new Set(names)];

// ARRAY vs SET

// Array
// ✔ Ordered collection
// ✔ Allows duplicates
// ✔ Index based access
// ✔ Uses push(), pop(), length

// Set
// ✔ Unique values only
// ✔ No index access
// ✔ Uses add(), delete(), has(), size
// ✔ Best for removing duplicates

// ARRAY vs MAP vs SET

// ARRAY
// Use when:
// - Order matters
// - Index access is needed
// - Duplicates are allowed
// Examples:
// - Playlist songs
// - Chat messages
// - Shopping cart
// - Student attendance

// MAP
// Use when:
// - Key -> Value relationship is needed
// - Keys can be any datatype
// - Fast lookup by key
// Examples:
// - Country -> Capital
// - Student -> Marks
// - User -> Session
// - Object -> Cached Data

// SET
// Use when:
// - Only unique values are needed
// - Removing duplicates
// - Membership checking
// Examples:
// - Usernames
// - Email addresses
// - Tags
// - Skills
// - Categories
// - Visited Pages

// INTERVIEW SUMMARY

// Object -> Describe an entity.
// Array  -> Ordered list.
// Map    -> Lookup table (Key -> Value).
// Set    -> Unique collection.
