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

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);// -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);//exponent
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);//122 as associativity of + is left to right
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);//classic BODMAS

console.log(+true);
console.log(typeof +"33"); //unary plus operator converts to number

let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2//it is right associative
// console.table([num1, num2, num3]);//4 4 4

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
console.log(--gameCounter);

console.log(Number("0x11")); //17 hexadecimal to decimal conversion
console.log(Number("0b11")); //3 binary to decimal conversion
console.log(Number("0o11")); //9 octal to decimal conversion

// Type conversion is similar to type coercion because they both convert values from one data type to another
//  with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
  // const value1 = "5";
  // const value2 = 9;
  // let sum = value1 + value2;
  // console.log(sum);// "59" because of implicit type coercion

  // let explicitSum = Number(value1) + value2;
  // console.log(explicitSum);//14 because of explicit type conversion

  
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
