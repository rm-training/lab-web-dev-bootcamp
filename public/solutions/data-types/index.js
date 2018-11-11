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
var myArray = [1, 2, 3, "bad", 5];
console.log(myArray);


// 5)
// Use Array.prototype.concat to add another array to your original array
// e.g. var arr3 = arr1.concat(arr2);
// Log the result to the console

var concatted = myArray.concat([1, 2, 3]);
console.log(concatted);



// 6)
// Create an object literal that represents a User as it may be
// stored in a database. It should have a few properties, such as:
// - username (string)
// - id (integer)
// - first name (string)
// - last name (string)
// Log your User object to the console
var user = {
  username: 'mrmorris',
  id: 1,
  first: 'Ryan',
  last: 'Morris'
};
console.log(user, user.username);

// 7) Bonus
// Add a function (method) to the User object to "speak"
// The speak function should expect a single string argment
// and log a message to the console like:
// 	"{User.username} says {message}"
user.speak = function (msg) {
  console.log(user.username + 'says: ' + msg);

  // es6 string template literals
  console.log(`${user.username} says: ${msg}`);
};