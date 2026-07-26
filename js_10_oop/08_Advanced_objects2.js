//Computed Property Names : What if the object's property name is stored in a variable?
const key = "city";
/*We want the object to become
{
    city: "Bhubaneswar"
}
A beginner might write
const user = {
    key: "Bhubaneswar"
};
console.log(user);

Output
{
    key: "Bhubaneswar"
}
*/
//so we use :
const user = {
  [key]: "Bhubaneswar",
  //Evaluate the variable first, then use its value as the property name.
};
console.log(user); //{  city: "Bhubaneswar"}

//examples
const num = 1;
const obj = {
  ["user" + num]: "Rahul",
};
console.log(obj); //{ user1: "Rahul"}

//usage
const inputName = "email";
const inputValue = "abc@gmail.com";
const formData = {
  [inputName]: inputValue,
};
console.log(formData);
//Now if
inputName = "password";
//the same code automatically creates: { password: "abc123"}

//Optional Chaining (?.)
//What if a property doesn't exist?
const user = {
  name: "Sankar",
};
console.log(user.address.city);
//Output: TypeError: Cannot read properties of undefined
//working:avaScript first evaluates user.address which becomes
//undefined Then it tries undefined.city which is impossible.so error
//Optional Chaining
console.log(user.address?.city);
//If address exists, JavaScript continues.
//If address is undefined or null,JavaScript stops immediately.So no error is thrown thus it is safe
// e.g console.log(user.address?.location?.pincode); js checks one by one level

//with arrays
const users = [
  {
    name: "Rahul",
  },
];
console.log(users[0]?.name); //Rahul
//question: what if users array is empty?
const users = [];
console.log(users[0]?.name); //undefined

//with functions
const user = {};
user.greet?.(); //Nothing happens
console.log("Done"); //as program proceeds here Done will be printed
//but the code/app wont crash and execute the remaining code

//React application
const response = {
  data: {
    user: {
      name: "Sankar",
    },
  },
};
console.log(response.data?.user?.name);
//If tomorrow the API returns const response = {};
//The same code gives undefined instead of crashing the application.

/*Internal working is similar to this code:
const temp = obj.sayHello;
if (temp !== undefined && temp !== null) {
    temp();
}
*/

//Optional chaining does not hide every error.
const obj = {
  sayHello: 10,
};
obj.sayHello?.();
// obj.sayHello exists.
//Its value is 10. Since it's not null or undefined, optional chaining does not stop.
//JavaScript tries: 10();
// Now what?: TypeError: obj.sayHello is not a function
// Why?Because?.() only checks whether the value is nullish(null or undefined).
// It does not check whether the value is actually callable.

//Suppose we have
const username = "";
//We want to display a default name if no username exists.Many beginners write
const name = username || "Guest";
console.log(name); //"Guest"
//username wasn't actually missing? It was an empty string. JavaScript still replaced it.
//problem 2:
const marks = 0;
const result = marks || 50;
console.log(result); //50
//but the student's score is 0 still JavaScript replaced it with 50 bcz of the mechanism of ||.

//Solution is: Nullish Coalescing (??)
//?? is much more specific. It only checks for
// null
// undefined
// Nothing else.
//example:
console.log(null ?? "Guest"); //"Guest"
console.log(undefined ?? "Guest"); //"Guest"
console.log("" ?? "Guest"); //""
console.log(0 ?? 100); //0

//Combining ?. and ??
const user = {
  address: {
    city: "",
  },
};
const city = user.address?.city ?? "Unknown";
console.log(city); //""

const city = user.address?.city ?? "Unknown";
console.log(city); //"Unknown"
