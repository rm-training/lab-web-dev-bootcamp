/****************************************************************************/
// EXERCISE 1:
//
// The function below should return an object with two
// properties:
//
//   setTemp: A function that takes a single argument and sets the
//            current temperature to the value of the argument.
//
//   getTemp: A function that returns the last temperature set by
//            the setTemp function.
//
var ClosureExercise = function () {
  const temps = [];

  return {
    setTemp: function (temp) {
      temps.push(temp);
    },
    getTemp: function () {
      return temps[temps.length - 1];
    }
  };
};
