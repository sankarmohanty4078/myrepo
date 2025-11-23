// //inside the browser 'this' refers to the window object
// //but inside the node environment 'this' refers to the global object {}
// //this refers tohe current execution context
// //example usage of 'this' inside an object method
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomeMessage()// hitesh , welcome to website
// //above code will return the user object having username:"hitesh" and price property

// user.username = "sam"
// user.welcomeMessage()// sam , welcome to website
// above code will return the user object having username:"sam" and price property(context changed)

//this doesn't refer to the function itself
function func1() {
  let username = "func1";
  console.log("line 25", this.username);
}

func1();
//When called as a standalone function, this refers to the global object (or undefined in strict mode)
//The local variable username inside the
//function is completely separate from this.username, so it logs undefined.
//undefined as 'this' here refers to the global object which doesnt have any username property

//here also we get undefined as result bca
//Arrow functions don't have their own this - they inherit this from their enclosing scope (lexical this).
// Since func3 is defined inside func2,
//it inherits func2's this, which is still the global object. Result: still undefined.
const func4 = function () {
  let username = "func4";

  console.log("line 39", this.username);

  const func5 = () => {
    let username = "func5";
    console.log("line 43", this.username);
  };
};
func4();

//explained how to do then in the below section
const obj = {
  username: "obj",
  func2: function () {
    let username = "func2";

    console.log(this.username); //here the parent is not globla object but obj , so we dont get undefine as the result

    const func3 = () => {
      let username = "func3";
      console.log(this.username);
    };

    func3();
  },
};
obj.func2();

//Arrow function
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
const addtwo = (num1, num2) => num1 + num2;
//Multi-line expressions:parentheses is mandatory if return keyword is not used
const calculate = (x, y) => x * y + x / y - Math.sqrt(x + y);
//returning an object literal also need to be wrapped inside parentheses
const objLiteral = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo(3, 4));
