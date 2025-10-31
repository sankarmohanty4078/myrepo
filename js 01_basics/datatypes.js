"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // no pop-up because we are using nodejs, not browser

console.log(3 + 3); // it is possible but code readability should be high

console.log("Hitesh"); //String datatype

let name = "hitesh";
let age = 18; //numeric datatype
let height = 5.9; //float datatype
let isLoggedIn = false; //boolean datatype
let state;

// range of number => -(2^53) to (2^53)
// bigint
// string => enclosed in '' or "" or ``
//but the difference between '', "" and `` is that `` allows string interpolation and multi-line strings
// boolean => true/false
// null => standalone value not a datatype
// undefined => absence of value , declared but not initialized
// symbol => unique identifier for objects

// object
let user = {
  name: "Hitesh",
  age: 18,
  isLoggedIn: false,
};
console.log(typeof user); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object

//  Primitive Data types (allocated memory in stack)
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//Both the following are Number datatypes
const score = 100;
const scoreValue = 100.3;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
//Both are different because Symbol creates unique identifiers

// const bigNumber = 3456543576654356754n;
// console.log(typeof bigNumber);

// Reference (Non primitive) Data types(allocated memory in heap)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};
console.log(typeof myFunction); // function

// https://262.ecma-international.org/5.1/#sec-11.4.3
