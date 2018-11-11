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
 * The secondary objects should "inherit" some properties and methods from the primary
 * ex: Dog and Cat both have a "speak" method and "legs" property
 *
 * The secondary objects should have some of their "own" properties
 * ex: Cat has a "hiss" method
 *
 * Ex:
 * var felix = new Cat('felix');
 * felix.speak(); // "Felix Meows"
 */

var Animal = function (name, legs, sound) {
  this.name = name;
  this.legs = legs;
  this.sound = sound;
};

Animal.prototype.speak = function () {
  console.log(`${this.name}: ${this.sound}`);
};

const Dog = function (name, breed) {
  Animal.call(this, name, 4, 'bark!');
  this.breed = breed;
};

Dog.prototype = Object.create(Animal.prototype);

var Cat = function (name, hasAttitude) {
  Animal.call(this, name, 4, 'me...ow');
  this.hasAttitude = hasAttitude;
};

Cat.prototype = Object.create(Animal.prototype);

var fido = new Dog('Fido', 'jack russel');
var felix = new Cat('Felix', true);

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

var animal = {
  name: null,
  legs: 4,
  sound: '...',
  speak: function () {
    console.log(`${this.name}: ${this.sound}`);
  }
};

var dog = Object.create(animal);
dog.sound = 'Bark!';

var cat = Object.create(animal);
cat.sound = 'Me...ow';

var fido = Object.create(dog);
dog.name = 'Fido';

var felix = Object.create(cat);
felix.name = 'Felix';

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

class Animal {
  constructor(name, legs, sound) {
    this.name = name;
    this.legs = legs;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name}: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 4, 'Bark!');
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(name, hasAttitude) {
    super(name, 4, 'Me..ow');
    this.hasAttitude = hasAttitude;
  }
}

var fido = new Dog('Fido', 'Jack Russel');
var felix = new Cat('Felix', true);