/**
 * Create a module, GuessingModule
 *
 * Any instance of this module  should return an interface
 * that allows a user to guess which number it is "thinking" of.
 *
 * It should have two methods:
 *
 * is_it(integer)
 * Given a number "guess" the module should report true/false (or yes/no)
 * As to whether the user's "guess" is the same as the number the module is retaining
 *
 * give_up()
 * Returns the number the module has been retaining and the user
 * has been attempting to guess
 *
 * Hints:
 * You'll use an IIFE to create the module
 * You'll use Math.random() (most likely) to have it create a random number to "think of"
 * It returns an object interface
 */
let GuessingModule = (function app(){
	let x;

	function think_of_a_number() {
		x = Math.floor(Math.random() * Math.floor(100));
	}

	think_of_a_number();

	return {
		is_it: function (guess) {
			console.log(x === guess ? "yes!" : "no");
		},
		give_up: function() {
			console.log(x);
		}
	}
})();
