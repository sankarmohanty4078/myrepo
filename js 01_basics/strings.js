//2 types of string declaration
const gameName = new String("hitesh-hc-com");
const name = "hitesh";
const repoCount = 50;
//ways to conactenate & print strings
// console.log("Hello my name is " + name + " and my repo count is " + repoCount);//less readable and less reliable
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //more readable and reliable

//ways to access characters in a string
console.log("String Accessing:");
gameName[0] = "H"; //gives no error
console.log(gameName[0]); //Still prints 'h' as strings are immutable
console.log(gameName.charAt(0));
console.log(gameName.charCodeAt(0)); //it returns the Unicode value of the character at the specified index
console.log(gameName.codePointAt(0)); //it returns the Unicode code point value of the character at the specified index
//codePointat is different from charCodeAt in that it can handle characters represented by surrogate pairs
// (i.e., characters outside the Basic Multilingual Plane).
console.log(gameName.at(0)); //it returns the character at the specified index,
// similar to charAt method,but it also supports negative indexing e.g at(-1) returns the last character of the string

//All string methods return a new string and string is immutable,can be replaced only not modified
console.log("String Concatenation:");
text1 = "Hello" + " " + "World!";
text2 = "Hello".concat(" ", "World!", " bye✌️"); //concat() method can take multiple arguments and concatenates them to the original string and returns a new string
console.log(text1); //Hello World!
console.log(text2); //Hello World!

console.log("String parts Extraction:");
//Slice method
//slice method extracts a section(starting from startIndex to endIndex-1) of a string and returns it as a new string,
//without modifying the original string,here the endIndex is not included in the extracted part.
//endIndex has to be greater than startIndex to get a valid result.
//endIndex is optional,if not provided the slice method extracts till the end of the string.
//Syntax: string.slice(startIndex, endIndex);
//if startIndex<0,the method becomes slice(string.length + startIndex, endIndex) or simply count the same posns from end
// const anotherString = name.slice(-6, 2);
// console.log(anotherString); //hi
//substring(start,end) is similar to slice() but The difference is that start and end values less than 0 are treated as 0.
//substr(start,length of string wanted)(deprecated)

//isWellFormed() method determines whether a string is well-formed according to the UTF-16 encoding standard.
let a = "Hello world!";
let b = "Hello World \uD800";
console.log(a.isWellFormed()); //true
console.log(b.isWellFormed()); //false
//for converting into well formed string use toWellFormed() method
console.log(b.toWellFormed()); //Hello World �

//to add padding in string
let numb = 5;
let normal = numb.toString();
console.log(normal.padStart(4, "0")); //0005 it adds padding to the start of the string until it reaches the specified length
console.log(normal.padEnd(4, "0")); //5000 it adds padding to the end of the string until it reaches the specified length

//repeatedly printing a string with repeat()
console.log("Hello ".repeat(3) + " my dear fans ! ");

console.log("For replacing String Content:");
text = "Please visit Microsoft!"; //replace() only replaces the first occurrence
// const url = "https://hitesh.com/hitesh choudhary";
// console.log(url.replace(" ", "+"));//used in google search query
let newText = text.replace("Microsoft", "amazon"); //it is case sensitive text.replace("MICROSOFT", "amazon"); wouldn't work
console.log(newText); //Please visit amazon
//to make it case insensitive use regular expressions with i flag
newText = text.replace(/MICROSOFT/i, "amazon");
console.log(newText); //Please visit amazon
//to replace all occurrences use g flag in regular expressions or use replaceAll() method
text = "Please visit Microsoft and Microsoft!";
newText = text.replace(/Microsoft/g, "amazon");
console.log(newText); //Please visit amazon and amazon!
newText = text.replaceAll("Microsoft", "amazon"); //replaceAll() is an ES2021 feature & does not work in Internet Explorer.
console.log(newText); //Please visit amazon and amazon!
newText = text.replaceAll(/Microsoft/g, "amazon");
console.log(newText); //Please visit amazon and amazon!
//console.log(gameName.__proto__);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
//console.log(gameName.length);//13

//trim method removes white space chars like white spaces and line terminators like "\n" from both ends of a string.
// const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); //'hitesh'
// console.log(newStringOne.trimStart()); //'hitesh '
// console.log(newStringOne.trimEnd()); //'   hitesh'
//split() method
// console.log(gameName.split("-")); //['hitesh', 'hc', 'com']
// console.log(gameName.split("")); //splits every char including special chars
//['h', 'i', 't', 'e', 's', 'h', '-', 'h', 'c', '-', 'c', 'o', 'm']

console.log("String Searching:");
url = "https://hitesh.com/hitesh-choudhary";
// console.log(url.indexOf("hitesh")); //8 first occurrence
// console.log(url.indexOf("hitesh", 9)); //  (starts searching from index 9))
// console.log(url.lastIndexOf("hitesh")); //19 last occurrence
// console.log(url.indexOf("Hitesh")); //-1 case sensitive,-1 means not found
// console.log(url.startsWith("https")); //true
// console.log(url.startsWith("http")); //true
// console.log(url.endsWith("choudhary")); //true
// console.log(url.includes("Hitesh")); //false, case sensitive
// console.log(url.includes("hitesh")); //true
//console.log(url.search(/hitesh/)); //8, can take "" string as argument too
//both search() and indexOf() work the same but
// The search() method cannot take a second argument(start position).
// The indexOf() method cannot take powerful search values (regular expressions).
//match(),matchAll() methods are used for more advanced pattern matching using regular expressions.
// Template literals allow embedded expressions,which are indicated by the dollar sign and curly braces (${expression}).
// const myName = "hitesh";
// const greeting = `Hello, my name is ${myName.toUpperCase()}.`;
// console.log(greeting); //Hello, my name is HITESH.

// Multi-line strings
// const multiLineString = `This is line one.
// This is line two.
// This is line three.`;
// console.log(multiLineString);
//This is line one.
//This is line two.
//This is line three.
