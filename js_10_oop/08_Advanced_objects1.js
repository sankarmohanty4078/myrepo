//Object Destructuring
const user = {
  name: "Sankar",
  age: 22,
  city: "Bhubaneswar",
};
//Normally we'd write
console.log(user.name);
console.log(user.age);
console.log(user.city);
//But imagine an object with 20 properties.
//Writing user.name,user.age,user.city,user.email,user.phone
//again and again becomes repetitive.
//Destructuring
const { name, age, city } = user;
console.log(name); //Sankar
console.log(age); //22
console.log(city); //Bhubaneswar
//We didn't write user.name anymore.
//JavaScript automatically extracts the values into variables.
//rule:The property names must match
const { age } = student;
console.log(age); //undefined
//Rename while destructuring
const { name: userName } = user;
console.log(userName); //Sankar
//Default values
const { name, city = "Delhi" } = user;
console.log(name);
console.log(city); //"Delhi
//Nested destructuring-most used in react
const user = {
  name: "Sankar",
  address: {
    city: "Bhubaneswar",
    state: "Odisha",
  },
};
const {
  address: { city },
} = user;
console.log(city); //Bhubaneswar
//Passing an Object as an Argument-most used application of object destructuring
const user = {
  name: "Sankar",
  age: 22,
  city: "Bhubaneswar",
};
function display({ name, age }) {
  console.log(name);
  console.log(age);
}
display(user); //Sankar 22
//spread operator ...
//The spread operator expands (spreads) the elements of an array or the properties of an object.
const nums = [10, 20, 30];
//Without spread,
console.log(nums); //[10, 20, 30]
//With spread,
console.log(...nums); //10 20 30
//Copying an Array Suppose
const arr1 = [1, 2, 3];
//We want another array. Wrong Way:
const arr2 = arr1;
//Now both variables point to the same array.
arr2.push(4);
console.log(arr1); //[1, 2, 3, 4]
//Because arrays are objects (reference types).
//Both variables reference the same array in memory.
//Correct Way
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);
//Output [1, 2, 3] [1, 2, 3, 4]
//Now JavaScript creates a new array.
//Merging Arrays
const frontend = ["HTML", "CSS"];
const backend = ["Node", "MongoDB"];
const fullStack = [...frontend, ...backend];
console.log(fullStack); //["HTML", "CSS", "Node", "MongoDB"]
//Adding New Elements
const nums = [2, 3, 4];
const newNums = [1, ...nums, 5];
console.log(newNums); //[1, 2, 3, 4, 5]
//we can place/use the spread operator anywhere in the array. e.g [...num,5]

//Spread with Objects
const user = {
  name: "Sankar",
  age: 22,
};
//Copy the object.
const user2 = { ...user };
console.log(user2); //{ name: "Sankar", age: 22}
//jects Are Also Reference Types Wrong way:
const user2 = user;
user2.age = 30;
console.log(user.age); //30
//Both variables point to the same object.
//Correct way
const user2 = { ...user };
user2.age = 30;
console.log(user.age); //22
console.log(user2.age); //30
//Merging Objects
const personal = {
  name: "Sankar",
};
const address = {
  city: "Bhubaneswar",
};
const user = {
  ...personal,
  ...address,
};
console.log(user); //{ name: "Sankar", city: "Bhubaneswar"}
//Overriding Properties
const user = {
  name: "Sankar",
  age: 22,
};
const updatedUser = {
  ...user,
  age: 23,
};
console.log(updatedUser.age); //23

//Spread performs a shallow copy, not a deep copy.
const user = {
  name: "Sankar",
  address: {
    city: "Bhubaneswar",
  },
};
const user2 = { ...user };
user2.address.city = "Delhi";
console.log(user.address.city); //Delhi
//Because only the top-level object was copied. The nested object (address) is still shared.
//3. Rest Operator (...) The syntax is exactly the same as the spread operator.
//Spread says: "Open it." Rest says: "Collect the remaining items."
//If ... is expanding something, it is Spread.
//If ... is collecting something, it is Rest.
function add(a, b) {
  return a + b;
}
console.log(add(10, 20)); //30
//But what if someone passes add(10, 20, 30, 40, 50);
//The extra arguments are ignored.
//using Rest Parameter
function add(...numbers) {
  console.log(numbers);
}
add(10, 20, 30, 40, 50); // [10, 20, 30, 40, 50]
//JavaScript collected every argument into one array.
//...numbers means Collect all remaining arguments.
//Rest  Have To Be Last parameter
function student(college, ...students) {
  console.log(college);
  console.log(students);
}
student("OUTR", "Rahul", "Sankar", "Amit");
//OUTR
//["Rahul", "Sankar", "Amit"]

//The first argument goes to college.  Everything else goes into students.
//Correct :  function demo(a, b, ...rest) {}
//Wrong : function demo(...rest, a) {}
//JavaScript doesn't know where to stop collecting. So Rest must always be the last parameter.
//Rest with Array Destructuring
const numbers = [10, 20, 30, 40, 50];
//Task :Extract the first number into a differenmt variable
const [first, ...remaining] = numbers;
console.log(first); //10
console.log(remaining); //[20, 30, 40, 50]
//remaining collected everything left.
const colors = ["Red", "Blue", "Green", "Yellow"];
const [a, b, ...others] = colors;
console.log(a); //Red
console.log(b); //blue
console.log(others); //["Green", "Yellow"]
//Rest with Object Destructuring
const user = {
  name: "Sankar",
  age: 22,
  city: "Bhubaneswar",
  country: "India",
};
//Extract name. Keep everything else.
const { name, ...details } = user;
console.log(name);
console.log(details); //{age: 22,city: "Bhubaneswar",country: "India"}
//Rest collected the remaining properties.
//Spread vs rest
const arr = [1, 2, 3];
console.log(...arr); //1 2 3
//Meaning: Open the array.
//Rest
const [a, ...rest] = [1, 2, 3];
console.log(a); //1
console.log(rest); //[2, 3]
//Meaning : Collect the remaining elements.
//Many beginners think spread and rest are different operators.
//They're actually the same ... operator. JavaScript decides what it means based on where it's used.
//If ... is on the right-hand side (RHS) It spreads.
const arr = [1, 2, 3];
console.log(...arr);
//or
const copy = [...arr];
//or
const obj2 = { ...obj };

//If ... is on the left-hand side (LHS) It collects.
const [a, ...rest] = arr;
//or
const { name, ...details } = user;
//or
function show(...nums) {}
//Examples:
const copy = [...arr];
//...arr is on the right → Spread.
const [a, ...rest] = arr;
//...rest is on the left → Rest.
