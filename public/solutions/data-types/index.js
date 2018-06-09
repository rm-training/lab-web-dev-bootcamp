/**
 * Exercise:
 * Get to know your data types and variables
 *
 * Follow the directions below but feel free to experiment and veer off course.
 * Work in the console directly OR use "console.log()" to output to the console from the script.
 */

// 1)
// Declare 2 to 5 variables (name them as you like)
// Make at least one string, one number and one boolean.
// Log the typeof each to the console

var x = 1;
var y = 'hi';
var truthy = true;

console.log(typeof x);
console.log(typeof y);
console.log(truthy);

// 2)
// Declare a new variable that stores the result of a mathematical expression
// You can add/multiply/divide/modulo any set of numbers
// Log the result to the console

var sum = 1 + 5;
var remainder = 25 % 4;
console.log("sum:", sum, "remainder:", remainder);

// 3)
// Combine at least three strings together
// Log the result to the console

var stringResult = "one" + "two" + "three";
console.log(stringResult);

// 4)
// Create an array with at least 5 values stored inside
// Log the result to the console
var myArray = [1,2,3,"bad",5];
console.log(myArray);


// 5)
// Use Array.prototype.concat to add another array to your original array
// e.g. var arr3 = arr1.concat(arr2);
// Log the result to the console

var concatted = myArray.concat([1, 2, 3]);
console.log(concatted);

// 6)
// Create an object literal that represents a person (perhaps you!)
// Define several properties within the object (name, hairColor, age, etc..)
// Define a property that stores an array ("siblings" or "favoriteColors")
// Log the object to the console
// Then Log ONLY the "name" property to the console
// Then Change the "name" property to something else, then log the object to the console

var me = {
  name: 'Ryan',
  favCity: 'singapore',
};

console.log(me, me.name, me.favCity);


// 7) Bonus
// Add a function (method) to the previous object you
// created to allow it to "speak" to the console. The function should expect a string argument and output "<object.name> said: <string>" to the console.