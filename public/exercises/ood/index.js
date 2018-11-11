/**
 * Object Oriented Design in JS
 *
 * We are going to create two sets of objects that "delegate" via the prototype chain
 *
 */

/*
 * Part 1
 * ========
 *
 * Using constructor functions, create a primary object prototype
 * and two child objects that inherit from (or delegate to) the primary object.
 * For example:
 * Animal is our primary object prototype
 * Dog inherits from / delegates to Animal
 * Cat inherits from / delegates to Animal
 *
 * Ex:
 * var felix = new Cat('felix');
 * felix.speak(); // "Felix Meows"
 */

/*
 * Part 2
 * ========
 *
 * Now use a purely prototypal approach to recreate the same hierarchy
 * You'll use Object.create() and you should not need to use the "new" keyword at all
 *
 * Ex:
 * var felix = Object.create(cat);
 * felix.speak(); // "Felix Meows"
 */


/*
 * Part 3
 * ========
 *
 * Try the same hierarchy using ES6+ class syntax
 *
 * Ex:
 * class Animal {
 *   constructor(name) {
 *     this.name = name;
 *   }
 * }
 */