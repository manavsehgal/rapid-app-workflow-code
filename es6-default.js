// These ES6 features will run using nodejs 4.1.2 without any runtime flags
// Refer: https://nodejs.org/en/docs/es6/
// Samples adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/

// Collections: Map

var myMap = new Map();
myMap.set(0, "zero"); myMap.set(1, "one");

console.log("Collections: Map");

myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
}, myMap)
