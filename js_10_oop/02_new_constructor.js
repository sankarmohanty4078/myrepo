//brute force approach for creating users
const user1 = {
  name: "Sankar",
  age: 25,
};

const user2 = {
  name: "Rahul",
  age: 22,
};

const user3 = {
  name: "Amit",
  age: 20,
};
//now imagine creating 10000 users with this code
//js does this process of creating objects in memory and storing them in the heap memory automatically using new k/w
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Sankar", 25);
//It doesn't directly execute User().It performs 4 hidden steps.
//Step 1:
//Creates a brand-new empty object.
//const obj = {};
//step 2:
// Links this object to the function's prototype. For now just remember:
// obj
// │
// └── [[Prototype]]
//           │
//           ▼
// User.prototype
// Step 3:
// Now JavaScript calls the function.But not normally.
// Instead of:User("Sankar",25);
// it behaves conceptually like: User.call(obj,"Sankar",25);
//the call() binds the 'this' to the obj and executes the function
// The function executes, and a new property is added to the object.
// obj.name = "Sankar";
// obj.age = 25;
// Step 4:
// If the function doesn't return an object, JavaScript automatically returns the object created in step 1.(look at the function)
// return obj;

/*
so const u1 = new User("Sankar",25); actually becomes:
"const obj = {};
User.call(obj,"Sankar",25);
return obj;"
*/

//Constructor Naming Convention:
// function User(){} starts with a capital letter.
// This is not a rule.This is a convention.
// It tells other developers: "This function should be called with new."

//Now look at the following code
function Car(brand) {
  this.brand = brand;

  this.start = function () {
    console.log("Engine Started");
  };
}

const c1 = new Car("BMW");
const c2 = new Car("Audi");
const c3 = new Car("Tesla");
//it does something like this in the memory for each object:
/*
c1
├── brand : "BMW"
└── start ---> Function #1

c2
├── brand : "Audi"
└── start ---> Function #2

c3
├── brand : "Tesla"
└── start ---> Function #3
What a waste of memory!
*/
//Instead, create it once and let every object use it. Like this:
/*
             start()
                ▲
                │
        Shared Function
           ▲      ▲      ▲
           │      │      │
          c1     c2     c3
*/
//This shared storage area is called the prototype.

//Solution:
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log("Engine Started");
};
const c1 = new Car("BMW"); //here none of the objects actually have the 'start' function but c1.start(); still works
const c2 = new Car("Audi");
const c3 = new Car("Tesla");
//Instead,all objects share one function.
/*
When you write: c1.start();
JavaScript asks:
Step 1 : "Does c1 itself contain start?"
c1
 |->brand ✅
 |->start ❌
Not found.
Step 2: JavaScript says: "Maybe this object has a prototype."
Remember the hidden Step 2 of new? When we did:
const c1 = new Car("BMW"); JavaScript secretly linked c1 to Car.prototype.
Think of it like an invisible pointer:
c1
│
├── brand : BMW
│
└────► Car.prototype
That arrow is the object's internal prototype link.
Step 3: JavaScript now checks: Car.prototype has start ✅ Found!
So it executes: start()

This is called...The Prototype Chain. JavaScript searches
Object
↓
Prototype
↓
Prototype's prototype
↓
Prototype's prototype's prototype
↓
...
↓
Until null.
*/
//Prototype methods get copied.❌Nothing gets copied.
// Instead: c1 ─────► prototype
// c2 ─────► prototype
// c3 ─────► prototype
// All of them point to the same object.
//Similarly an Array object has no map() method but it is in Array.prototype
//similar happens with string's toUpperCase() and object's toString()

//new problem statement
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log("Started");
};

const c1 = new Car("BMW");
const c2 = new Car("Audi");
c1.start = function () {
  console.log("Modified");
};

//what wuill be the output?
c1.start(); //Modified
c2.start(); //Started
//here we didn't change the start() of the Car.prototype
//we just added a new method start() to the c1 object
//thusnow when js searches or start() in c1,start(){clog("Moidfied")} is found so no further search in prototype done
// What happened here is called property shadowing (or method shadowing).
// The object's own property shadows (hides) the property with the same name in its prototype.
//The prototype is just a shared storage area for methods and properties
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.

//Every object in JavaScript has a built-in property, which is called its prototype
// /he prototype is itself an object, so the prototype will have its own prototype,
// making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype and return undefined.
//The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice
//  all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.
//Suppose we just randomly create an object const myObject = {city: "Madrid",greet(){console.log(`Greetings from ${this.city}`);},};
//So when we call myObject.toString(), the browser: it looks for toString in myObject
//can't find it there, so looks in the prototype object of myObject for toString ,finds it there, and calls it.
//This is an object called Object.prototype, and it is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null, so it's at the end of the prototype chain:
//What is the prototype for myObject? To find out, we can use the function Object.getPrototypeOf():
Object.getPrototypeOf(myObject); // Object { }
//This is an object called Object.prototype, and it is the most basic prototype, that all objects have by default.
//  The prototype of Object.prototype is null, so it's at the end of the prototype chain
//Prototype shadowing occurs when an object has its own property with the same name as a property in its prototype.
//c1.start = function(){ console.log("Modified"); };
//Now c1.start() uses the object's own start method, hiding (shadowing) Car.prototype.start,
// while other objects like c2 still use Car.prototype.start().
