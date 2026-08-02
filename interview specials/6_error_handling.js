//types of error
// ReferenceError → Something doesn't exist. console.log(x);
// TypeError → Wrong operation on a value. null.name;
// SyntaxError → Invalid syntax or malformed input (like bad JSON). JSON.parse("Hello");

//Quiz
try {
  console.log("A");
  console.log(x); //x is not declared.
  console.log("B");
} catch (err) {
  //catch executes only if an exception (error) is thrown inside the corresponding try block.
  console.log("C");
} finally {
  console.log("F");
}
console.log("D");
//as there is an error execution of try block will stop at line 4 statement printing x
//output:A C F D

//quiz 2
try {
  const person = null;
  console.log(person.name);
} catch (err) {
  console.log(err.name);
  console.log("Recovered");
}
console.log("Program continues");
//output: TypeError Recovered Program continues
//typeErroe Because: person.nametries to read a property from null.
//That's an invalid operation, so JavaScript throws a TypeError.

//what happens without a catch bloxk? use of finally
try {
  console.log("A");
  console.log(x);
} finally {
  //if there is a try block...finally will executed anyhow before program is executed
  console.log("B");
}
console.log("C");
//A B ReferenceError
//console.log("C"); never executes as execution of program stopped at clog(X) only as error is not handled

//real life usaqe :
// showLoading();
// try {
//     // Fetch data from server
// }
// catch(err){
//     console.log("Failed");
// }
// finally{
//     hideLoading();
// }

//throw
let amount = -100;
// JavaScript says:
// "Looks fine. amount is just a number."
// But our application says:
// "Negative withdrawal amount is invalid."
//Syntax : throw value;
//The value can be: String,Number,Boolean,Object,Error object
//Although JavaScript allows all of them, using an Error object is the recommended practice.
//bcz in the catch block we cant get more data about a string/number thrown by throw using e.name,e.message that could help us in debuigging
//Example of throw
let age = -5;
if (age < 0) {
  throw "Age cannot be negative"; //execution stops right here
}
console.log("Valid age"); //never executed
//output: Uncaught Age cannot be negative

//throwing proper error objects
try {
  throw new Error("Invalid age");
  // js instantly creates similar to this:{name: "Error",message: "Wrong Password",stack: "..."}
  //The class is Error. The constructor argument becomes the message.
} catch (err) {
  console.log(err.name); //"Error"
  //err.name will be undefined, if you threw a primitive like a string or number.
  console.log(err.message); //Invalid age
}
//Built-in Error Classes
// JavaScript already provides several specialized error classes:
// new Error()
// new TypeError()
// new ReferenceError()
// new SyntaxError()
// new RangeError()

//Custom error
class ValidationError extends Error {
  constructor(message) {
    // Called when creating the error.
    super(message); // Calls Error constructor and stores the message.
    this.name = "ValidationError"; // Changes the error type from "Error" to "ValidationError".
  }
}
try {
  throw new ValidationError("Age cannot be negative");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
//Without custom class:
// Error
// Age cannot be negative

// With custom class:
// ValidationError
// Age cannot be negative

// Why call super(message)?Remember inheritance?
// class ValidationError extends Error means
// ValidationError
//         ↑
//       Error
// The parent (Error) already knows how to store message
// So we call super(message);
// to let the parent initialize its part of the object.
// Without it, err.message wouldn't be initialized correctly.

//example 2 of custom class
class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
  }
}
throw new AuthenticationError("Invalid password");
//output AuthenticationError Invalid password

//quiz 3
class LoginError extends Error {
  constructor(message) {
    super(message);
    this.name = "LoginError";
  }
}
try {
  throw new LoginError("Invalid Password");
} catch (err) {
  console.log(err.name); //LoginError
  console.log(err.message); //Invalid Password
  console.log(err instanceof LoginError); //true
  console.log(err instanceof Error); //true
}
