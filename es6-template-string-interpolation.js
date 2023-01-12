// **  USE ES6 TEMPLATE STRINGS TO INTERPOLATE VALUES  **

/*
  Template strings are a great feature added in ES6 that allow you to evaluate expressions and insert the results within a string. Here you'll learn how to use them, and what kinds of things can and can't be inserted into strings with the template string syntax.
*/

/*

    Template Strings a.k.a. String Interpolation

*/

const firstName = "Dave";
const lastName = "Ceddia";
const usesReact = false;

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const summary = `${fullName} ${
  usesReact ? "uses React" : "does not use React"
}`;
console.log(summary);

const answer = `The answer is ${40 + 2}`;
console.log(answer);

const add = (a, b) => a + b;
const newAnswer = `The answer is ${add(20, 10)}`;
console.log(newAnswer);
