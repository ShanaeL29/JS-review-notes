// ** UNDERSTAND MUTABLE VS. IMMUTABLE OPERATIONS IN JAVASCRIPT **

/*
  Modern JS code is often written in a functional style, opting to perform immutable updates to objects and arrays rather than mutating the original values. In this lesson you'll learn what mutability and immutability are, how to spot mutations in your code, and how to convert code with mutations into immutable code.
*/

// ** MUTABLE
const nums = [1, 2, 3, 4];
const user = {
  username: "sleslie",
  firstName: "Shanae",
  lastName: "Leslie",
  posts: ["a", "b", "c"],
};

// mutate just means change

console.log(user);
user.firstName = "Someone";
console.log(user);
// we have mutated the user so now the original user has changed
// but if we look at our original user it ALSO now says 'Someone'... why?
// this is because in the developer console, when you consol.log an object, it actually keeps a reference to the object itself. "value below was evaluated just now" which proves that we did actually change the user.

function setName(user, newName) {
  user.firstName = newName;
}

console.log(user);
setName(user, "someone else");
console.log(user);

// we see the same thing as before
// this happens because JavaScript passes variables by reference. We are NOT passing in a copy of user, we are passing in a REFERENCE to the user object. So when we mutate/make a change, that change cascades out to the user object

function setName(user, newName) {
  user.firstName = newName;
  return user;
}

console.log(user);
const newUser = setName(user, "someone else again");
console.log(newUser);
// same thing. we are still CHANGING user.etc

// ---------------------------------------------------

// ** IMMUTABLE
// So how can we update the user IMMUTABLY??

// The way to do this is to make a copy of the user object (ES6 spread operator)

function setName(user, newName) {
  const copy = { ...user }; // creating a brand new wrapper and copying in all of the properties from user
  copy.firstName = newName;
  return copy;
}

console.log(user);
const newUser2 = setName(user, "ghost");
console.log(newUser2);

// leaves the original user (prior one) untouched and only the new one is changed

console.log(user === newUser); // false

// the above could also be rewritten as:

function setName(user, newName) {
  const copy = {
    ...user,
    firstName: newName, // overriding firstName inside
  };
  return copy;
}

function setName(user, newName) {
  return {
    // returning the object itself w/o saving it into a variable
    ...user,
    firstName: newName,
  };
  return copy;
}

// it is effectively the same as writing:
function setName(user, newName) {
  return {
    // returning the object itself w/o saving it into a variable
    ...user,
    posts: user.posts, // is NOT a copy but a REFERENCE to the original posts array
    username: user.username, // etc
    firstName: newName,
  };
  return copy;
}

console.log(user.posts === newUser.posts); // true

// if we wanted to mutate posts, we could follow the same format:
function setName(user, newName) {
  return {
    ...user,
    firstName: newName,
    posts: [...user.posts, "d"],
  };
  return copy;
}
console.log(user.posts === newUser.posts); // false!
// the first one has 3 posts and the new one has 4

// So in order to immutably update and object or an array you need to: create a new object/array, copy in all the old values, and then make your changes. If you have nested objects/arrays you need to make sure to update each level in turn

// The JavaScript garbage collector is well optimized for this kind of use case so this type of thing does not cause performance problems
