// console.log(2 > 1);//true
// console.log(2 >= 1);//true
// console.log(2 < 1);//false
// console.log(2 == 1);//false
// console.log(2 != 1);//true

// console.log("2" > 1);//true
// console.log("02" > 1);//true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//the results are different bcz == and comparison operators work differently
//because null is converted to 0 for relational comparisons
// but for equality check it is not converted to any value but any other values such as strings are converted to NaN and then compared

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === strict equality operator
console.log("2" === 2); //false
