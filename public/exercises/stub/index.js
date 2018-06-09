/**
 * Smart Stub (module)
 *
 * Write a function stub() that keeps track of it's own usage
 * It should keep track of call count and arguments used in each call.
 *
 * stub.count();
 * - returns the current call count. The count starts at 0 and becomes 1 once it is called one time.
 *
 * stub.args(i);
 * - returns an array of arguments that were used at that call in the stack.
 * - stub.args(1) would return the first-ever arguments passed to the function; during the first call
 *
 * stub.reset();
 * - sets the count back to 0 and empties any arguments it has been tracking
 *
 * The actual "count" and "arguments" data should not be publicly accessible except through the methods above.
 *
 * Hint:
 * - Need privacy. You'll be using an IFFE and/or closures
 * - stub() is a function with methods... not an object
 *
 * Example usage:
 * 	stub();
 * 	stub(1);
 * 	stub(2,3);
 * 	stub.count(); // 3
 * 	stub.args(1); // undefined
 * 	stub.args(3); // [2,3]
 * 	stub.reset();
 * 	stub.count(); // 0
 */
