// --------------------------------------------------------------
// ORIGINAL CODE (kept exactly as it is)
// --------------------------------------------------------------
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
//reduce() is used to reduce the array to a single value
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);

// --------------------------------------------------------------
// ADDED EXPLANATIONS + EXTRA SNIPPETS (simple + clean)
// Focus: understanding reduce + other higher-order array functions
// --------------------------------------------------------------

// reduce → takes a callback + initial value → returns ONE final result.
// Common use cases: sums, averages, merging objects, counting, etc.

const product = myNums.reduce((acc, curr) => acc * curr, 1);
// console.log(product); // multiplies all values

// reduce with logging (helps understand the flow)
myNums.reduce((acc, curr) => {
  // console.log(`acc is ${acc}, curr is ${curr}`);
  return acc + curr;
}, 0);

// --------------------------------------------------------------
// reduce with objects (very practical in real apps)
// --------------------------------------------------------------

// Calculate total items' price (same logic as your shoppingCart example)
const itemPrices = [
  { name: "Pen", price: 20 },
  { name: "Notebook", price: 60 },
  { name: "Bag", price: 500 },
];

const totalCost = itemPrices.reduce((acc, item) => acc + item.price, 0);
// console.log(totalCost);

// Count occurrences using reduce
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }

// --------------------------------------------------------------
// Quick comparisons with other high-order functions
// --------------------------------------------------------------

// map → transform each element → new array
const doubledNums = myNums.map((n) => n * 2);
// console.log(doubledNums);

// filter → keep only matching values → new array
const greaterThanOne = myNums.filter((n) => n > 1);
// console.log(greaterThanOne);

// forEach → just “do something” for each item (no returned array)
myNums.forEach((n) => {
  // console.log("Saw:", n);
});

// --------------------------------------------------------------
// FINAL SHORT SUMMARY (2–3 lines, as requested)
// --------------------------------------------------------------
// map transforms each element and returns a new array.
// filter selects certain elements and returns a smaller array.
// reduce combines the whole array into ONE final result (sum, count, etc.).
//comeback
