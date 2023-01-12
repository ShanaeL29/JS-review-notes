// **   USE DESTRUCTURING TO PICK APART ARRAYS AND OBJECTS  **

/*
  The syntax for destructuring, introduced in ES6, makes it easy to pull values out of arrays and objects and into variables, without a lot of tedious manual assignments. This lesson will show you how to destructure arrays and objects and make your code more concise.
*/

// Array Destructuring
const nums = [1, 2, 3, 4, 5];

/*
    If we want to grab the first couple of values out of this Array, we can use ES6 destructuring.
*/

const [a, b] = nums; // basically saying... I expect this thing to be an array and I want you to pull out the first field and put it in 'a' etc
/*
    This will create a variable 'a' with the value 1 and a variable 'b' with the value 2. The rest of the array elements will be ignored.

    It is the equivalent to writing:
        const a = nums[0];
        const b = nums[1];
*/

// We can also combine the ...rest operator with destructuring to put the remaining items into a new array
const [c, d, ...others] = nums;
console.log(c, d, others); // 1 2 [3, 4, 5]

// Destructuring never modifies/changes the original thing on the right side of the equal sign.

// Object Destructuring
const user = {
  username: "sleslie",
  firstName: "Shanae",
  lastName: "Leslie",
};

// // so the  v variable  v names here need to match key names in the object
// const { username, firstName } = user; // we are saying... we expect this "user" thing to be an object, please pull out the username key and put it in a variable called username and the firstName key and put it in a variable called firstName
// console.log(username, firstName);

// You can rename the variables if you need to by putting a : and the new name:
const { username: uname, firstName: fName } = user;
console.log(uname, fName);

// We can also specify DEFAULT values for these keys. For example, if they are missing we can set a default value of 'MISSING'
const { fullName = "MISSING" } = user;
console.log(fullName); // MISSING
// BUT if that object DOES have a fullName value already then THAT value will stay instead NOT the default

// Just like with arrays, we can use the ...rest operator. We could pull out the username and then put the rest of the properties into a variable called name and destructure all of that from user
const { username, ...rest } = user;
console.log(rest); // prints out everything except the user. So this is useful if you need to remove a property from an object. BUT it does not modify the original user
console.log(user);

/*

*/

// Nested Destructuring
const user2 = {
  username: "sleslie",
  firstName: "Shanae",
  lastName: "Leslie",
  posts: [
    { id: 1, title: "Best Post Ever" },
    { id: 2, title: "Second Best Post Ever" },
  ],
};

const {
  posts: [{ title }, { title: title2 }],
} = user2; // the outside is an object then posts, then we have an array, then an object and another object. We can't call them both title because title 1 makes title already exist so we rename the second title

console.log(title); // we get the expected title for id1

console.log(title2); // we get the expected title for id2

// console.log(posts);
// WE DON'T HAVE POSTS. This is because when you are destructuring multiple levels, only the deepest keys become variables!! So if you also needed the whole array of posts then you would need to pull that out  separately.
// THIS IS HARD TO READ SO MULTILEVEL DESTRUCURING IS NOT RECOMMENDED IF YOU CAN AVOID IT!!

/*

*/

// You will often see destructuring in ReadableByteStreamController. This is plain old JavaScript and is not some special React thing
function Counter({ initialCountProp }) {
  // prop value destructuring
  // hook value destructuring
  const [count, setCount] = useState(initialCountProp);
}
