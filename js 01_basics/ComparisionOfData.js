// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//the results are different bcz == and comparision operators work differently
//because null is converted to 0 for relational comparisons
// but for equality check it is not converted to any value but any other values such as strings are converted to NaN and then compared

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict equality operator
console.log("2" === 2);
