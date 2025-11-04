// Numbers in JS can be integers or floating-point.
// JavaScript also supports special numeric values:
// Infinity, -Infinity, and NaN.
// Number Declaration
const num1 = 42;
const num2 = 3.14;
const num3 = Number("123"); // converts string to number
console.log(num1, num2, num3);

//Number Methods

// toString() - Converts number to string
const n = 255;
console.log(n.toString()); // "255"
console.log(n.toString().length); // 3
// toFixed() - Rounds number to fixed decimal places
const price = 9.8765;
console.log(price.toFixed(2)); // "9.88"

// toPrecision() - Formats number to specified length
const val = 123.456;
console.log(val.toPrecision(4)); // "123.5"

// valueOf() - Returns primitive value of Number object
const x = new Number(50);
console.log(x.valueOf()); // 50

// Number.isInteger() - Checks if value is an integer
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.2)); // false

// Number.isNaN() - Checks if value is NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false

// parseInt() - Parses string and returns integer
console.log(parseInt("42px")); // 42

// parseFloat() - Parses string and returns floating number
console.log(parseFloat("3.14abc")); // 3.14

// Number() - Converts value to number
console.log(Number("123")); // 123
console.log(Number("Hello")); // NaN

//Math Object (Static Methods)

// Math.abs() - Returns absolute value
console.log(Math.abs(-10)); // 10

// Math.round() - Rounds to nearest integer
console.log(Math.round(4.7)); // 5

// Math.ceil() - Rounds up
console.log(Math.ceil(4.1)); // 5

// Math.floor() - Rounds down
console.log(Math.floor(4.9)); // 4

// Math.trunc() - Removes decimal part
console.log(Math.trunc(4.7)); // 4

// Math.pow() - Returns base to the exponent power
console.log(Math.pow(2, 3)); //(2 to the power 3) 8

// Math.sqrt() - Returns square root
console.log(Math.sqrt(16)); // 4

// Math.cbrt() - Returns cube root
console.log(Math.cbrt(27)); // 3

// Math.min() - Returns smallest number
console.log(Math.min(5, 2, 10)); // 2

// Math.max() - Returns largest number
console.log(Math.max(5, 2, 10)); // 10

// Math.random() - Returns random number between 0 and 1
console.log(Math.random());

// Generate random integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Generate random integer between 1 and 10
console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1);

console.log(getRandomInt(1, 10)); // e.g., 7

// Math.sign() - Returns sign of a number (1, -1, 0)
console.log(Math.sign(-8)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1

// Math.PI - Returns PI value
console.log(Math.PI); // 3.141592653589793

// Math.E - Returns Euler's number
console.log(Math.E); // 2.718281828459045

// Math.log() - Returns natural logarithm (base e)
console.log(Math.log(Math.E)); // 1
console.log(Math.log(1)); // 0

// Math.log10() - Returns base 10 logarithm
console.log(Math.log10(100)); // 2

// Math.exp() - Returns e^x
console.log(Math.exp(2)); // 7.38905609893065

// Math.hypot() - Returns sqrt(a² + b² + …) - basically returns length of hypotenuse based on base and perpendicular length
console.log(Math.hypot(3, 4)); // 5

// Math.clz32() - Returns number of leading zeros (32-bit binary)
console.log(Math.clz32(1)); // 31
