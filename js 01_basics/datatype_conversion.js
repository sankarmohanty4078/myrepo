let score = "hitesh";
//console.log(typeof score);
//console.log(typeof(score));
//both are valid ways to check datatype

// let score2 = null
// let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2);//number
// console.log(valueInNumber2);//0

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN Not a number

//string to number conversion
// "hitesh" => NaN
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" , null , undefined => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
