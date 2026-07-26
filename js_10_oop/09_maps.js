// MAP vs OBJECT  Both store key-value pairs.
// OBJECT
const user = {
  name: "Sankar",
  age: 22,
};
// Access
console.log(user.name);
// Add
user.city = "BBSR";
// Delete
delete user.age;
// Check key
console.log("name" in user);
// Size (no direct property)
console.log(Object.keys(user).length);

// MAP
const map = new Map();
// Add
map.set("name", "Sankar");
map.set("age", 22);
// Access
console.log(map.get("name"));
// Update
map.set("age", 23);
// Check key
console.log(map.has("name"));
// Delete
map.delete("age");
// Size
console.log(map.size);
// Remove everything
map.clear();

// OBJECT vs MAP

// Object
// - Best for describing a real-world entity.
// - Keys are String or Symbol.
// - Access using dot or [] notation.

// Map
// - Best for lookup tables / relationships.
// - Keys can be ANY datatype.
// - Uses set(), get(), has(), delete(), clear().

// OBJECT KEYS
const obj = {};
obj[10] = "Ten";
console.log(obj);
// Output:
// { "10": "Ten" }
// Number key becomes String.

// MAP KEYS
const m = new Map();
m.set(10, "Ten");
console.log(m.get(10)); // Ten
// Number remains Number.

// OBJECT AS KEY (Map Advantage)
const person = {
  id: 1,
};
const cache = new Map();
cache.set(person, "Developer");
console.log(cache.get(person)); // Developer

// FUNCTION AS KEY
function greet() {}
cache.set(greet, "Hello");
console.log(cache.get(greet));

// ARRAY AS KEY
const arr = [1, 2, 3];
cache.set(arr, "Numbers");
console.log(cache.get(arr));

// ITERATING OBJECT
const student = {
  name: "Rahul",
  marks: 90,
};
for (const key in student) {
  console.log(key, student[key]);
}

// ITERATING MAP
const studentMap = new Map();
studentMap.set("name", "Rahul");
studentMap.set("marks", 90);
for (const [key, value] of studentMap) {
  console.log(key, value);
}

// INSERTION ORDER
const order = new Map();
order.set("C", 3);
order.set("A", 1);
order.set("B", 2);

// Output order:
// C
// A
// B
// Map preserves insertion order.

// WHEN TO USE OBJECT
// Use Object when describing an entity.
const car = {
  brand: "BMW",
  color: "Black",
  year: 2025,
};

// WHEN TO USE MAP
// Use Map when storing relationships.
// Student  -> Marks
// Country  -> Capital
// User     -> Session
// Object   -> Cached Data
// Product  -> Quantity

// LOOKUP TABLE EXAMPLE
// Country -> Capital

const capitals = new Map();
capitals.set("India", "New Delhi");
capitals.set("Japan", "Tokyo");
capitals.set("France", "Paris");
console.log(capitals.get("Japan")); // Tokyo

// LOOKUP TABLE (Object as Key)
const user1 = { id: 101 };
const user2 = { id: 102 };
const sessions = new Map();
sessions.set(user1, "Logged In");
sessions.set(user2, "Logged Out");
console.log(sessions.get(user1)); // Logged In
console.log(sessions.get(user2)); // Logged Out

// INTERVIEW SUMMARY

// Object:
// ✔ Describe an entity
// ✔ String/Symbol keys
// ✔ Dot notation
// ✔ Most commonly used

// Map:
// ✔ Dynamic lookup table
// ✔ Any datatype as key
// ✔ Preserves insertion order
// ✔ Direct size property
// ✔ Better when keys are objects/functions/numbers
