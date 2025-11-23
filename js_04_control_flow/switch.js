// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

//switch statement is used to perform different actions based on different conditions
//if there are multiple statements to be executed based on different conditions
//then you can wrap them in curly braces under the cases
const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  //if we dont put break statement it will continue to execute
  // the next cases also until it finds a break statement until the end of switch block
  case "feb":
    console.log("feb");
    break;
  case "march": {
    console.log("march");
    console.log("curly braces worked");
    break;
  }
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
