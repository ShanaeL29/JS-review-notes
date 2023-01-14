// ** USE IMPORT AND EXPORT ON JS FILES AND MODULES **
// only notes, not functional

/*
    Nearly every modern JS app uses import to pull in packages from NPM or from other files within the project, but are you sure about how it works? In this lesson you'll learn about named and default imports & exports, when you need to write the {} braces, and when you don't. We'll cover using import & export both with your own files, and with external packages.
*/

// You can use import and export to pull in code from other modules, whether those are from npm, Yarn, or your own code.

// Let's install the moment library by saying yarn add moment (in the terminal if you have Yarn already installed).

// Moment is a library for dealing with dates and times. We can import moment from the string moment
// import moment from "moment";
import m from "moment";


//Once it's imported, we can call Moment in the format, the current date as year, month, day
// console.log(moment().format("YYYY - MM - DD"));

// What we've done here is import the default. Because it's the default, we could name it whatever we want, like m
console.log(m().format("YYYY - MM - DD"));

//That'll still work fine. Of course, the package name needs to match the one you installed. If it doesn't start with any path indicators like dots or anything, // import m from ".moment";
// then it's usually going to be coming from node modules.

// Let's install the lodash package. We'll run Yarn add lodash. You could also run npm i lodash. Lodash is a useful utility library with a bunch of handy functions. One of them is called get. We can import get from lodash.
// import { get } from lodash;
import { get as _get } from lodash;

// With get, we can create an object. We'll say we have an object here that has a key a. That's an object that has a key b. That's an object that has a key c. Its value is seven. 
const o = {
    a: {
        // b: {
        //     c: 7
        // }
    }
}

//We can use get on this object and pass in a path, like a.b.c.
// console.log(get(o, 'a.b.c')); // 7
console.log(_get(o, 'a.b.c')); // 7


// Get will resolve the string path by drilling into this object and pulling out the value. The great thing about get is that it returns undefined if it can't find that path.
/*
    const o = {
        a: { }
    }
*/
// console.log(get(o, 'a.b.c')); // undefined

// Versus if we try to access a.b.c directly, we get a reference error.
// console.log(a.b.c);
// reference error: a is not defined etc

// This import (import { get } from 'lodash') is called a named import because it's inside braces. You can think of it like object destructuring, where this module is an object and we're pulling out a key called get and putting it in a variable called get.

// This name needs to match the name in the module. If you want to rename it, you can use as and say, "rename get as _get."
// import { get as _get } from 'lodash';

// Then we can use _get instead.
// console.log(_get(o, 'a.b.c')); 

// If you're using a module that has a lot of named exports and you want to import all of them, you can use star. You can say:
// import * as _ from lodash;

// Now we can use _.get because this variable underscore contains all the exports as keys.
// console.log(_.get)

// We can get oa.b.c.
// console.log(_.get(o, 'a.b.c'))

// Remember, using star does need to be star AS something.You can't just import everything into the current namespace. You can do star as whatever name you want and then use that name later on.

import * as L from 'lodash';
console.log(L.get(o, 'a.b.c'));

// All these examples are importing from an external package. Let 's see how we could import from one of our own files. We'll make one called user.js. We're going to write a function called say hi, and just console logs hi.

// Unless we explicitly export this function, it's not available to outside modules. If we go over to index, and we try to import say hi, say, as a named import from ./user, and then we try calling say hi, we're going to get an error because this is undefined.
import { sayHi } from './user';
sayHi();

// We could also try it as the default. That doesn't work either because we haven't exported it yet. If we precede the function by export default, and now this is going to be the default export, and our call is working.

// Remember, since this is the default export, we could name it whatever we want. This name doesn't need to match the one of the file. 
import hi  from './user';
hi();

// Let's write another function (in user.js) called print name. It'll take a user object, and then log out the user.firstname, followed by user.lastname.

// We already have one default export, and we CAN'T have more than one of those. We could export this as a named export by just saying export function. Now, print name is a named export from this file. We could import that separately with the braces as print name from./user. We can call our print name function and pass in a user object. That works well.
import { printName } from './user'
printName({
    firstName: 'shanae',
    lastName: 'leslie'
})
 

// We can also combine these into one import by putting the default import first, followed by a comma, and then any named imports.
// import hi, { printName } from './user';

// It has to be in this order, default followed by named. If we write it the other way, with named comma, default, we're going to get an error.
// import { printName }, hi from './user';
// we get error


// You can export more than just functions. We can say export const, base URL is some string. One thing to be aware of is it exports need to be at the top level of the file. You can't do them conditionally. If we tried to say like, if true export something, we're going to get an error. The important export may only appear at the top level. I'll undo that.

// Now, if we take this named export here, we can go back over to our index file and import it and print it out.
import hi, { printName, BASE_URL } from './user';

console.log(BASE_URL)