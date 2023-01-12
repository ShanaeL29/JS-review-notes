// ** REMOVE ARRAY ITEMS WITH SLICE AND SPLICE

/*
    The confusingly-named slice and splice functions do very different things. Here you'll learn the difference between slice vs. splice, which to use for immutable operations, and a few ways to remove items from an array.
*/

const word = ["c", "o", "d", "e"];

console.log(word); // unchanged

// If we have an array like this and we wanted to remove the first item, we can use the slice function by calling word.slice. Slice takes two arguments, the beginning and the end, but it doesn't include the end index. We're going to use 1 to start because this is index 1 and we'll use 4 to end because that's 1 past the end here. If I log out the word, we're going to see the word hasn't changed at all. If I log out the sliced value, we can see it return the last three letters.

console.log(word.slice(1, 4));
// or
// There's an easier way to write this if you want to start at one index and take the rest of the items. You can do that by leaving off the second argument. This is saying slice starting at 1 and taking the rest and we get the same result.

console.log(word.slice(1)); // slice starting at 1 and taking the rest

// If instead we wanted to remove the last item, so we wanted to get COD, we could write that as start at and stop before 3. Then we go , 1, 2, giving us the first three letters.
console.log(word.slice(0, 3));

// Instead of a hard coded number here, we could use word.length - 1.
console.log(word.slice(0, word.length - 1));

// If we wanted just the last item, we can pass a negative number to slice, which is like wrapping around the array and starting at the end. If we go -1 we'll start with E. If we go -2, it'll start with D and take the rest. -3 will start with O and take the rest. -4 will start at the beginning. If we pass -5 or any other number that's larger than the size of the array, it will just get the whole array.
console.log(word.slice(-1));
console.log(word.slice(-3)); // ode
console.log(word.slice(-4)); // code (the whole array)
console.log(word.slice(-7)); // we get the whole array

// If you need to remove something from the middle of an array, then slice is not the right tool for that. Instead, you can use the very similarly named splice, but splice will actually change the word. It's also a lot more powerful than slice in that it can remove, and it can add items.

// The first argument to splice is going to be the index where we want to start making our changes. Let's say we wanted to remove the letter O, that's index 1. I'll pass a 1 to splice and if we try this now, what this is saying is start at index 1 and remove everything after it.

console.log(word.splice(1)); // ['o', 'd', 'e']

// You can see the call to splice returned the letters that were removed and modified the word to just have the first letter.
console.log(word); // ['c']

// The second argument to splice is how many items to remove starting at index 1. If we wanted to just remove the O, we could pass a 1 here and that will take out the O.
console.log(word.splice(1, 1)); // ['o']
console.log(word); // ['c', 'd', 'e']

// If we wanted to remove OD, we could pass 2. You'll see we pulled out O and D and word just has C and E now.
console.log(word.splice(1, 2)); // ['o', 'd']
console.log(word); // ['c', 'e']

// I mentioned that splice can let you add items as well and if you pass any more arguments after this, it will insert them at that position after doing the removing. Here it's going to remove O and D and then if we wanted to add some new letters like X and Y...Now we can see, it started at index 1, remove two letters and inserted X and Y in their place, and the resulting word as CXYE.

console.log(word.splice(1, 2, "x", "y")); // ['o', 'd']
console.log(word); // ['c', 'x', 'y', 'e']

// Since splice modifies the original array and the value it returns is the stuff that removed, if you want to do an immutable update, you'll need to make a copy first and store that copy in a variable.

//We could make a new array and spread our word into it and then do our modification to the copy and log out the copy.
let copy = [...word];
copy.splice(1, 2, "x", "y");

// There you can see word hasn't changed and we've got our modified copy.
console.log(copy); // ['c', 'x', 'y', 'e']
console.log(word); // ['c', 'o', 'd', 'e']
