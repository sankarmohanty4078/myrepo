const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true → same number primitive
console.log(obj === obj); // true → same object reference
console.log(str === str); // true → same string primitive

console.log(num === obj); // false → number !== object
console.log(num === str); // false → number !== string
console.log(obj === str); // false → object !== primitive string

console.log(null === undefined); // false → different types
console.log(obj === null); // false → object is not null
console.log(obj === undefined); // false → object is not undefined

const num2 = 0;
const big2 = 0n;
const str2 = "0";
const obj2 = new String("0");

console.log(num2 == str2); // true → "0" converted to number 0
console.log(big2 == num2); // true → BigInt 0n loosely equals 0
console.log(str2 == big2); // true → "0" converted for comparison

console.log(num2 == obj2); // true → object converted to primitive "0", then to 0
console.log(big2 == obj2); // true → object → "0" → 0n comparison
console.log(str2 == obj2); // true → object converted to primitive string "0"
