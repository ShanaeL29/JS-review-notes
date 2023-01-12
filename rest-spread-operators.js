// **   USE THE REST AND SPREAD OPERATORS ON ARRAYS AND OBJECTS **

/*
  The rest and spread operators are two different names for the same three ... dots. In one case, you can combine elements together with ...rest, and in the other, you can ...spread out an array into arguments (or even spread an object into another object). This lesson will walk you through all the different uses of rest and spread.
*/

// Rest & Spread operators
// 2 names for 3 dots that look the same

// .
// .
// .

// REST

// when you are writing out a function you can use the ES6 "rest arguments", which are the 3 dots before a parameter, to collect all of the arguments together INTO AN ARRAY.
function printArgs(...args) {
  console.log(args);
}
printArgs(1, 2, 3); // [1, 2, 3]

// -
// -

// the "rest args" parameter needs to be the last one; other parameters can go before it
function printRest(first, second, ...rest) {
  console.log(first, second, rest);
}
printRest(1, 2, 3, 4, 5); // prints out the first and the second and then combines the "rest" into an array --> 1 2 [3, 4, 5]

// the ...rest is GUARANTEED to be an array
// so if you don't have enough arguments it will still just be an empty array INCLUDING if we call it with nothing
function printRest(first, second, ...rest) {
  console.log(first, second, rest);
}
printRest(1, 2); // 1 2 []
printRest(); // undefined undefined []

// .
// .
// .

// SPREAD

/* The SPREAD operator looks the same except it "EXPLODES AND ARRAY IN PLACE"  */
const nums = [1, 2, 3, 4];
printRest(...nums); // 1 2 [3, 4]
// this is the same as if we had written out
printRest(nums[0], nums[1], nums[2], nums[3]);

printArgs(...nums); // [1, 2, 3, 4]
// the spread operator is going to spread out nums and then pass them in as individual arguments to the function

// .
// .
// .

// The spread operator ALSO works on objects
const user = {
  username: "sleslie",
  firstName: "Shanae",
  lastName: "Leslie",
};

console.log({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
}); // explodes the object into a brand new object. THIS is useful if you want to add properties to an object without modifying the original

// ORDER matters. If you had something before the spread then the properties from the user (that is spread) will override existing ones in your object
console.log({
  age: 30,
  firstName: "Default",
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
}); // the 'Default' gets overridden because the user we are spreading already HAS a firstName BUT the age property does NOT exist already so it DOES get kept

// .
// .
// .

// COMBINING THE REST AND SPREAD OPERATORS
// A nice way to combine the rest and spread operators is if you needed to write a debug funtion that will print or not print something based on some global flag

const DEBUG = false; // we don't see the args
// const DEBUG = true; // we see the args

// IF DEBUG is true then these will be forwrded on to console.log()
const debug = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};
debug("this", "works", "great");

// So the difference between rest and spread
/*
  Rest parameters help us to pass an infinite number of function arguments and represents as an array
    fn sum (a, b, ...remaining)
    sum(1, 2, 3, 4, 5, 6, 7) --> a -> 1 b -> 2 remaining [3, 4, 5, 6, 7] etc

  Spread Operator helps us to expand the: strings or array literals or object literals
    Spread Example 1: Strings:
      let name = "JavaScript";
      let arrayOfStrings = [...name];
      console.log(arrayOfStrings); --> 
      ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
    
    
    Spread Example 2: Arrays: (we can merge arrays)
      let group1 = [1, 2, 3];
      let group2 = [4, 5, 6];
      const allGroups = [...group1, ...group2]
      console.log(allGroups); --> [1, 2, 3, 4, 5, 6]

    Spread Example 3: Objects: (we can merge objects)
      let obj1 = {
        a:1, 
        b: 2, 
      };

      let obj2 = {
        c: 3, 
        d: 4
      };

      const merge = [...obj1, ...obj2]
      console.log(merge); --> {a: 1, b: 2, c: 3, d: 4}

    Spread Example 4: We can use the spread operator to pass an array of numbers as individual function arguments
      function sum(a, b, c){
        return a + b + c;
      }

      const nums = [1, 2, 3];

      //function calling
      sum(...nums) --> 6

  Summary:
    Spread operator helps us to merge Arrays or Objects
    ... dots on the function call -> spread operator
    ... dots on the function parameter -> rest paramater

    The spread operator takes an array or object and breaks it into pieces

    The rest operator takes leftover pieces and them in an array or object
*/
