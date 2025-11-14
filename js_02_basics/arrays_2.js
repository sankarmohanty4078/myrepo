const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "batman", "flash"];
const boys_heroes = ["homelander", "billy butcher"];

// marvel_heroes.push(dc_heroes)//here we know array can contain elements of any type including another array
// console.log(marvel_heroes);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heroes[3][1]);//'batman'
const allHeroes = marvel_heroes.concat(dc_heroes, boys_heroes); //Merges multiple arrays into one arrayis also possible using concat method of array
console.log(allHeroes); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//merging arrays using spread operator(spread operator does something like breaking a glass into small pieces)
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

//flattening an array,syntax: array_name.flat(depth_of_flattening)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array1 = another_array.flat(1);
const real_another_array2 = another_array.flat(2);
const real_another_array3 = another_array.flat(Infinity); //Infinity means flattening to the maximum depth possible
console.log(real_another_array1); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
console.log(real_another_array2); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
console.log(real_another_array3); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

//using static methods of Array class that return boolean or array
console.log(Array.isArray("Hitesh")); //returns false as string is not an array
//from() in simple terms creates an array from an iterable or array-like object,like cutting vegetables into
// small pieces(refers to elements of array)  to make a dish(refers to array here)
console.log(Array.from("Hitesh")); //converts iterable or array-like object to an array

//we have to tell if we want to make array of keys or values of an object while passing an object to Array.from()
console.log(Array.from({ name: "hitesh" })); // interesting case: returns empty array as object is not iterable or array-like

//Array.of() creates an array from the arguments passed to it
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
