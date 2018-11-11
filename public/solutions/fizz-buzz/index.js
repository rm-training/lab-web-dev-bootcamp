/**
 * Exercise:
 *
 * FizzBuzz Function
 *
 * Work in the console, or use "console.log()" to output to the console
 * from the script
 *
 * Create a function that:
 *  - Accepts a single number argument
 *  - Outputs the correct response based on the FizzBuzz rules
 *
 * Loop through the numbers 1-100 and output the FizzBuzz result for each.
 * Make sure to space things out nicely (or put them on new lines).
 *
 * The FizzBuzz rules...
 *  - for numbers that are a multiple of 3, log "Fizz" instead of the number
 *  - for numbers that are a multiple of 5, log "Buzz" instead of the number
 *  - for numbers that are a multiple of both, log "FizzBuzz" instead of just Fizz or Buzz
 *
 * BONUS:
 * Write tests using console.assert() to verify your results
 *  ex: console.assert(fizzbuzz(3) === "Fizz", "Multiple of 3 should result in Fizz");
 *
 */
function fizzbuzz(n) {
  var result = '';

  if (n % 3 === 0) {
    result += 'Fizz';
  }

  if (n % 5 === 0) {
    result += 'Buzz';
  }

  return result;
}

for (var i = 0; i < 100; i++) {
  console.log(fizzbuzz(i));
}

// BONUS -- write your tests here
console.assert(fizzbuzz(3) === 'Fizz', '3 should result in Fizz');
console.assert(fizzbuzz(5) === 'Buzz', '5 should result in Buzz');
console.assert(fizzbuzz(15) === 'FizzBuzz', '15 should result in FizzBuzz');