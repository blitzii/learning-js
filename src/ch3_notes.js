/*
Functions
- return without expression produces 'undefined'
*/

// Zero Parameters
var makeNoise = function() {
  console.log("Pling!");
};

// One Parameter
var square = function(x) {
  return x * x;
};
console.log(square(12));

// Two Parameters
var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};
console.log(power(2,10));


// Scopes
// - Only functions produce a new scope in JS
var x = "outside";
var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x); //> outside

var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x); //> inside f2


// Remember a variable that holds a function is still a regular variable
// var launchMissiles = function(value) {
//   missileSystem.launch("now");
// };
// if (safeMode)
//   launchMissiles = function(value) {/* do nothing */};


// Alternative function declaration
// - functions declared this way are initialized immediately (out of flow)
function square(x) {
  return x * x;
}


// Optional arguments
// - number of provided arguments is always optional
// - i.e. too many -> ignored; too few -> undefined
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}
console.log(power(4));
console.log(power(4,3));


// Closure
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5)); // > 10


// Recursion
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1)
}

console.log(power(2,3)); // > 8


function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
        find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}
console.log(findSolution(24));
// > (((1 * 3) + 5) * 3)
