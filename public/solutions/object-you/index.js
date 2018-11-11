/**
 * Part 1: Create an object that represents yourself
 *
 * It should have some data (properties):
 *  Give it your name
 *  Height? Age? Whatever...
 *
 * It should have some behaviors (methods)
 *  Speak? Sit? Stand?
 *  Dance?
 *
 * Part 2: Create at least one method, "speak", which accepts a string argument and logs it to the console such as:
 *   me.speak("hello") => "Tim says: hello"
 *
 * Part 3: Let’s assume you have a collection of something. Trophies?
 * Create an array property on your object that has a couple trophies inside it
 *
 * Part 4: Add a function that outputs the trophy name to the consold
 *   me.viewTrophy(i)
 * This should log the name of the trophy at index i to the console
 *
 * Part 5: Add a function that lists trophies to the console
 *   me.listTrophies(i);
 * This should log a list of trophic names, separated by comma
 * ex: “gold star, track, silver medal”
 *
 * Bonus A: Make the "trophies" property non-enumerable
 * prop in me) {console.log(prop);}
 *       should not output "trophies" as an enumerable prop
 *
 * Bonus B: How might we make it so that your trophies are protected?
 * Hint: closures
*/

var me = {
  name: 'Jim Bob',
  age: 105,
  speak: function (words) {
    console.log(this.name, 'says', words);
  },
  trophies: ['red', 'gold', 'swimming'],
  viewTrophy: function (i) {
    return this.trophies[i];
  }
};

Object.defineProperty(me, 'trophies', {
  enumerable: false
});

console.log(me.viewTrophy(1));
for (var propName in me) {
  console.log(propName, me[propName]);
}

// make trophies private through the user of a closure
var me = (function () {
  var trophies = ['red', 'gold', 'swimming'];

  return {
    name: 'Jim Bob',
    age: 105,
    speak: function (words) {
      console.log(this.name, 'says', words);
    },
    viewTrophy: function (i) {
      return trophies[i];
    }
  }
}());