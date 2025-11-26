// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number");
  }
  //console.log(element);
}

// Extra snippet: Summing numbers from 1 to 10 using for loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`Sum of numbers from 1 to 10: ${sum}`); // Outputs: Sum of numbers from 1 to 10: 55

// Explanation: The for loop is ideal for scenarios where the number of iterations is known beforehand, like calculating sums or averages.

// console.log(element);

for (let i = 1; i <= 10; i++) {
  //assignment->check->loop statements execution/out opf loop->update statement->check->loop/out of loop
  //console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
  }
}
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}

//example of extracting characters except white space from a string
const greetings = "Hello world!";
console.log("Chars except spaces in the string  are:");
for (let index = 0; index < greetings.length; index++) {
  if (greetings[index] === " ") continue;
  console.log(greetings[index]);
}

// Additional explanation based on MDN documentation:
// It consists of three parts: initialization, condition, and final expression.
// The loop continues executing as long as the condition evaluates to true.
// It is useful when you know in advance how many times the loop should run or want fine-grained control over the loop counter.
//
// The "for" loop works well with array-like structures such as arrays or strings when accessing elements by their index.
// It is also effective for looping with numeric counters or when working with any iterable objects where you explicitly manage the index.
//
// Example using "for" loop to iterate over a string by index:
//
// const word = "MDN";
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }
//
// Use of "break" exits the nearest enclosing loop immediately.
// Use of "continue" skips the current iteration and continues with the next iteration.
//
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
//
//
// Summary:
// - The classic "for" loop uses an index and works well with array-like objects (arrays, strings).
// - Allows control over loop execution with break and continue statements.
// - Can nest loops to handle multidimensional iteration.
// - Requires careful management of the loop variable to avoid off-by-one errors.
