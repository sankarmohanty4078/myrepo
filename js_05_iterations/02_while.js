let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  //console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 11;

// Extra snippet: Do-while loop to ensure at least one execution
let attempts = 0;
do {
  console.log(`Attempt ${attempts + 1}`);
  attempts++;
} while (attempts < 3); // Outputs: Attempt 1 Attempt 2 Attempt 3

// Explanation: Do-while loops guarantee at least one iteration, unlike while loops which may not execute if the condition is false initially.

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
