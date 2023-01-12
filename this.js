// ** UNDERSTAND HOW 'this' WORKS IN REGULAR FUNCTIONS AND ARROW FUNCTIONS **

/*
    Arrow functions simplify the handling of this, by consistently setting it to the value from the lexical scope where the arrow is defined. In this lesson you'll learn how this is handled in regular functions versus how it works in arrow functions.
*/

"use strict";

// function printThis() {
//   console.log(this);
// }

// printThis();

// -    In a regular function, there are a lot of rules to define the value of 'this'
/*
    -1.    If we call this function as is, it will print out the Window object

        -    Window {window: Window, self: Window, document: document, name: '', location: Location, …} etc

    -   But if the file was in 'strict mode'
        -   it returns UNDEFINED

    
    -2.     We can also change the value of this in a regular JS function by using the bind method and passing in some value to bind to 'this'. THis will return a new function that we could store in a variable and call. Now 'this' is the binded value

*/
// const fn = printThis.bind(42); // 42
// const fn = printThis.bind({ a: 1 }); // {a:1}

// fn();

/* -3. we can also use the call or apply functions which call the function immediately and set this. */
// printThis.call({ a: 1 }); // {a:1}
// printThis.apply({ a: 1 }); // {a:1}

// BUT ARROW FUNCTIONS have different rules
// -    In arrow functions, 'this' is bound to the value of whatever 'this' is in the surrounding scope which in this case is just an empty object // {}
const printThis = () => {
  console.log(this);
};

printThis();

printThis.bind(42)();
// just get back the object with THE VALUES WE PASSED IN *IGNORED*

// There is no way to change the value of 'this' in an arrow function once you create the arrow.
/*
     - In some cases this is great since you can pass a function around and it will retain its 'this' binding.

     - In other cases where you DO need a dynamic value of 'this' then you should stick with a regular function and NOT an arrow function.
*/
