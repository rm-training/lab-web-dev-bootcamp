/**
 * This block of code will not work...
 * It has a number of scoping and hoisting issues
 *
 * Clean up the scope and hoisting issues:
 * - using "var", "let" or "const"
 * - reorganize code as needed
 *
 * Bonus:
 * Re-organize and write the code so that it executes in full
 * without polluting the global scope
 */

var numbers = [4,2,3,1];
var secondNumbers = [5,5,5];
var total;
var secondTotal;

// NOTE: this could be re-written as a function declaration
var sumArray = function (arr) {
  var total = 0;
  for (var i=0; i<arr.length; i++) {
    total += arr[i];
  }
  return total;
}

total = sumArray(numbers);
secondTotal = sumArray(secondNumbers);

// testing the results
console.log('Original Array:', numbers);
console.log('First Total:', total);
console.log('Second Array:', secondNumbers);
console.log('Second Total:', secondTotal);

// BONUS
//
//
/*
function app () {

  var numbers = [4,2,3,1];
  var secondNumbers = [5,5,5];
  var total;
  var secondTotal;

  // NOTE: this could be re-written as a function declaration
  var sumArray = function (arr) {
    var total = 0;
    for (var i=0; i<arr.length; i++) {
      total += arr[i];
    }
    return total;
  }

  total = sumArray(numbers);
  secondTotal = sumArray(secondNumbers);

  // testing the results
  console.group('From app');
  console.log("Original Array:", numbers);
  console.log("First Total:", total);
  console.log("Second Array:", secondNumbers);
  console.log("Second Total:", secondTotal);

}

app();/**/