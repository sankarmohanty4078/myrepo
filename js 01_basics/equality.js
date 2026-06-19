const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

const num2 = 0;
const big2 = 0n;
const str2 = "0";
const obj2 = new String("0");

console.log(num2 == str2); // true
console.log(big2 == num2); // true
console.log(str2 == big2); // true

console.log(num2 == obj2); // true
console.log(big2 == obj2); // true
console.log(str2 == obj2); // true
