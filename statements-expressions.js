// ** UNDERSTAND THE DIFFERENCE BETWEEN STATEMENTS AND EXPRESSIONS **
// Statements vs Expressions

/*
  Every bit of JavaScript code can be classified as either a "statement" or an "expression". It's important to know the difference, because there are some places where you can only write an expression (when you get into React, for instance, JSX allows expressions but not statements). In this lesson you'll learn the difference between these two, and how to rewrite some statements as expressions.
*/

/*
    an expression is anything that evaluates to a value -> let a = 1 + 2, the 1 + 2 is an EXPRESSION 
    
    the entire thing let a = 1 + 2 however is a STATEMENT

    If you can put it on the right side of an equal sign then it is an expression
*/

if (true) {
  // do something
} // the if is a statement // the thing inside parentheses is an EXPRESSION as it needs to evaluate to something i.e a boolean

// these are all alse STATEMENTS
// let
// const
// var
// for (...)
// while (...)
// try {

// } catch(e) {

// }

// expressions can go on the right side of an equal sign, be assigned to variables, and be returned from functions
var a = { hi: true }; //arrays, object literal with keys and values

function stuff() {
  return { hi: true };
}

// It is important to know the difference between statements and expressions ESPECIALLY for frameworks like React where the rule is that you can only have EXPRESSIONS inside the JSX
function Component() {
  return <div>{1 + 2}</div>; // YES THIS IS OK
}
function Component() {
  return <div>{"hello"}</div>; // YES THIS IS OK
}
// function Component() {
//     return <div>{for }</div> // NO CAN NOT DO THIS
// }
// function Component() {
//     return <div>{if() }</div> // NO CAN NOT DO THIS
// }

/*
    For cases like this where you need to have a statement instead of an expression, you can rewrite some statements as expressions.
*/
if (Math.random() > 0.5) {
  a = "yes";
} else {
  a = "no";
}
// if we need to rewrite this as an expression we can use the ternary operator
a = Math.random() > 0.5 ? "yes" : "no";
// Math.random() > 0.5 ? "yes" : "no"; this entire piece is an expression so we can use this anywhere we need an expression instead of a statement
