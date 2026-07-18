//this refers to an object who called the function
const person1 = {
  name: "Rahul",

  greet() {
    console.log(this.name);
  },
};

const person2 = {
  name: "Amit",
};

person2.greet = person1.greet;
//now person2 has a greet() inside it
//in reality there is just 1 copy of greet() function in memory and both person1 and person2 are referring to it

person2.greet(); //Amit as person2 called the function

//problem 2
const person = {
  name: "Sankar",

  greet() {
    console.log(this.name);
  },
};

const sayHello = person.greet;

sayHello();
//in browser nonstrict mode  this === window
//but if in the html file if "use strict"; is written then this === undefined
//so this.name === undefined.name which gives typeError: Cannot read properties of undefined (reading 'name')

//problem type -3
const person = {
  name: "Sankar",

  greet() {
    console.log(this.name);
  },
};

const obj = {
  name: "Rahul",
  greet: person.greet,
};

obj.greet(); //"Rahul"
