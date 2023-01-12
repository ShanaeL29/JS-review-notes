// ** WRITE CONCISE FUNCTIONS WITH ES6 ARROWS AND IMPLICIT RETURNS **
/*
  Arrow functions are a great feature from ES6 that let you write more concise code by leaving out the "function" keyword. Here you'll learn how to convert regular functions to arrow functions and how to implicitly return expressions and object literals.
*/

// a plain old named function
// function makeFullName(first, last) {
//   return first + " " + last;
// }
// console.log(makeFullName("Dave", "Ceddia"));

// switched to arrow function
const makeFullName = (first, last) => {
  return first + " " + last;
};
console.log(makeFullName("Dave", "Ceddia"));

// anonymous function
// const printFullName = function (first, last) {
//   console.log(first, last);
// };

// switched to arrow function
const printFullName = (first, last) => {
  console.log(first, last);
  //  basically return undefined
};

printFullName("A", "B");

// -   Arrow functions are ALWAYS anonymous functions and stored in a variable

// - IMPLICIT RETURN
// - If you only have a single return you can remove the return and the { }

// another named function
// function createUser(name, email) {
//   return {
//     name: name,
//     email: email,
//     createdAt: Date.now(),
//   };
// }

// can also be turned into an arrow function
// const createUser = (name, email) => {
//   return {
//     name: name,
//     email: email,
//     createdAt: Date.now(),
//   };
// };

// const createUser = (name, email) => ({
//   name: name,
//   email: email,
//   createdAt: Date.now(),
// });
// console.log("Dave", "dave@example.com");

// BUT in order to be implemented implicitly, because it is ambiguous and JavaScript can't tell if the {} are the beginning of a function or object, THE object needs to be wrapped also in ()

// We can ALSO clean up this object using ES6 shorthand. If the name of the key matches the name of the variable going into that key, then you can just use the variable name.

const createUser = (name, email) => ({
  name,
  email,
  createdAt: Date.now(),
});
console.log("Dave", "dave@example.com");
