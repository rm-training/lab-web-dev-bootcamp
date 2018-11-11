/**
 * Create a module, GuessingModule
 *
 * Any instance of this module  should return an interface
 * that allows a user to guess which number it is "thinking" of.
 *
 * It should have two methods:
 *
 * isIt(integer)
 * Given a number "guess" the module should report true/false (or yes/no)
 * As to whether the user's "guess" is the same as the number the module is retaining
 *
 * giveUp()
 * Returns the number the module has been retaining and the user
 * has been attempting to guess
 *
 * Hints:
 * You'll use an IIFE to create the module
 * You'll use Math.random() (most likely) to have it create a random number to "think of"
 * It returns an object interface
 *
 * Bonus:
 * Add a "startOver" method that begins the game anew
 */

// example usage, uncomment to test if needed
/*
GuessingModule.isIt(5); // false
GuessingModule.isIt(10); // false
GuessingModule.giveUp(); // "It was 12!"
/**/