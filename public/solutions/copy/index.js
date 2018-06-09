/*
 * Fill in the `copy' function so that it duplicates the object it is
 * passed as its first argument.  It should return the duplicate.
 *
 * Ensure that the duplicated object only contains properties that are
 * present on the incoming object, and not those that it inherits.
 * (In other words, use the `hasOwnProperty' method.)
 *
 */
var copy = function (object) {

  var newObject = {};

  for (var prop in object) {

  	if (object.hasOwnProperty(prop)) {
  		newObject[prop] = object[prop];
  	}

  }

  return newObject;

};/**/

var testObject = {
 name: 'Ryan',
 id: 10
}
var copied = copy(testObject);
copied.id = 5;

console.log(copied, testObject);
console.assert(copied !== testObject);

/**
 * Copy
 * using ES6
 * Will not work in ie
 */
/*copy = function(object) {
	return Object.assign({}, object);
}/**/