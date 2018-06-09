/**
 * Exercise:
 *
 * Function Scope
 *
 * Work in the console, or use "console.log()" to output to the console
 * from the script
 *
 * You could also use console.assert(boolean) to test your functions
 *
 * Part 1: Write two functions that share the same, global variable
 * 	- Verify this by logging the value of the variable to the console
 *    from within each function
 */

var globalX = 1;

function funcOne() {
  console.log(globalX);
}

function funcTwo() {
  console.log(globalX);
}

funcOne();
funcTwo();

/*
* Part 2: Write two functions that share a non-global variable
*  - Verify this by logging the value of the variable to the console
*    from within each function
*
*    Hint: You can write functions inside of other functions...
*/


function funcOuter() {
  var x = 5;
  console.log(x);

  function funcOne() {
    console.log(x);
  }

  function funcTwo() {
    console.log(x);
  }

  funcOne();
  funcTwo();
}

funcOuter();


/*
* Bonus: Write a function (outer) that returns another function (inner)
*
* The outer function expects one Number parameter, x
* The inner function should add 1 to x and log it to the console
*
* Hint: You will need to run the outer function once
* in order to get the inner function
*/

function outer(x) {
  return function inner() {
    x += 1;
    console.log(x);
  };
}

console.group('Bonus');
var inner = outer(5);
inner();
inner();
inner();
