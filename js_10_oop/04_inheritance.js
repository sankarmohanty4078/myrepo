//We use the extends keyword to say that this class inherits from another class.
// ======================
// super() in JavaScript
// ======================

// Facts:
// 1. super() calls the parent class constructor.
// 2. In a child class (extends), super() MUST be called before using 'this'.
// 3. super() initializes the parent's properties.
// 4. The child can then initialize its own properties.
// 5. We add new properties in the child because they are specific to that child.
// 6. super.methodName() is used to call a parent's method.

// Parent class
class Person {
  constructor(name, age) {
    // Parent initialization
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    //here we used this.name instead of just name unlike java because in js we need to use this to refer to the current object
    //as there is no
  }
}

// Child class
class Student extends Person {
  constructor(name, age, rollNo, course) {
    // Child has its own initialization (rollNo, course),
    // but BEFORE doing that it MUST call the parent constructor.
    // This creates and initializes 'this' with name and age.
    super(name, age);

    // Child-specific initialization
    // These properties don't belong to every Person,
    // only Students have them.
    this.rollNo = rollNo;
    this.course = course;
  }

  showDetails() {
    // Calling parent's method
    super.introduce();

    console.log(`Roll No : ${this.rollNo}`);
    console.log(`Course  : ${this.course}`);
  }
}

const s1 = new Student("Sankar", 22, 101, "MCA");

s1.showDetails();

//summary:A child class first lets the parent initialize the common properties using super(),
// then it initializes its own unique properties using this.

/*
Output:

Hi, I'm Sankar and I'm 22 years old.
Roll No : 101
Course  : MCA
*/

// ----------------------------------------------------
// What if super() is not called first?
// ----------------------------------------------------

/*
class Student extends Person {
  constructor(name, age, rollNo) {

    // ❌ Error: this doesn't exist yet
    this.rollNo = rollNo;

    super(name, age);
  }
}

ReferenceError:
Must call super constructor in derived class before accessing 'this'
*/
