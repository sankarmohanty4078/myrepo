const accountId = 144553//const is used for declaring consatnts
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"//before ES6, only var was used instead of let and const
//var is function scoped not block scoped 
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed as accountId is constant


accountEmail = "hc@hc.com"//can be changed as it is declared using let
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
//we could use console.log to print multiple variable values in multiple lines but here is a better way to print in tabular format:
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//we get value of undefined for accountState as it is declared but not initialized