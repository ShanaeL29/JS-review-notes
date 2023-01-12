// ** USE LET AND CONST FOR BLOCK-SCOPED VARIABLES **

/*
  ES6 introduces two new keywords to create variables - let and const. Both of them are block-scoped, as opposed to var which is scoped to the surrounding function. The more limited scope of let and const makes them more predictable. In this lesson you'll learn how let and const work, the difference between function and block scope, and how const is only sort of constant.
*/

/*

    ES6 added 2 new variable types: let and const

    function vs block scope
    -   var: scoped to the enclosing FUNCTION
    -   let: scoped to the enclosing BLOCK

*/

function scopeTest() {
  console.log(outerVar); // prints undefined
  //   console.log(outerLet); // gives error "can't access outerLet before initialization"

  var outerVar = "outer var";
  let outerLet = "outer let";

  console.log(outerVar, outerLet); // prints the values as expected

  if (true) {
    // console.log(innerLet, innerVar); // error for innerLet and undefined for innerVar. It exists but has not yet been defined

    var innerVar = "inner var";
    let innerLet = "inner let";
    console.log(innerLet, innerVar);
  }
  // THIS is where 'let' diverges from 'var'
  console.log(innerVar);
  //   console.log(innerLet); // innerLet is NOT defined. THIS is because we are outside of the block and let is block-scoped whereas var is scoped to the enclosing function
}

scopeTest();

// var vs let inside of a closure
/*
    var: creates one variable, closure latches on
    let: creates a new variable for each iteration
*/
// A common gotcha with var is using inside of a for loop
// function printNumbers() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// printNumbers(); // works as expected so far

// BUT if we wrap the clg inside of a setTimeout(), we will now have a closure that closes over the reference to i

// function printNumbers() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i)), 1000;
//   }
// }

// printNumbers(); // prints out 5 BECAUSE by the time the timeout is done and runs, i has already incremented to 5 and the for loop is already done.
// The setTimeout function closes over the reference to the variable i so it doesn't actually make a copy of the value itself, it actually refers to the variable i in memory which 1 second later the variable i in memory now holds the value 5

function printNumbers() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i)), 1000;
  }
}

printNumbers(); // when we replace the variable with let, then it works as expected. This is because let creates a new variable for each iteration. So in when the closure latches on that variable, it gets the value frozen in time so when they all run a second later, we get 0-4

// CONSTANT -> CONST
const named = "Dave";
// named = "Someone else"; // can't do this as named is read only (const)
console.log(named);

const person = {
  name: "Dave",
};

// person = // no can't do this BUT CAN DO
person.name = "someone else"; // this is perfectly okay with a constant
console.log(person); // perfectly allowable to change a value this way in a more complex constant assignment

// The same is true for CONSTANT ARRAYS
const nums = [0, 2, 4, 6];
console.log(nums);
// we can push new numbers onto the array EVEN THOUGH we see a constant
/*

// So you CAN'T reassign a const, BUT there is no guarantee that the internals of the const won't change when it is a more complex data type like an object




*/
// core partners IT roles - cub scout
