// ** ADD ITEMS TO AN ARRAY WITH CONCAT AND THE SPREAD OPERATOR

/*
    Next time you need to add something to an array without mutating the array, look toward the concat method and the ... spread operator. In this lesson you'll learn how to use both to add items to an array.
*/

const numbers = [1, 2, 3, 4];
const moreNumbers = [5, 6, 7, 8];

// If you wanted to add an item to the end of this array, the first instinct would be to use push. We could say numbers.push and push on a new number then we'll log out numbers.
numbers.push(1000);
console.log(numbers); // [1, 2, 3, 4, 1000];

// The only problem with this is that it modifies the original numbers array.
// In a lot of cases, you'd rather update the array immutably, which means creating a new one instead of modifying the old one. To do that, we could use concat instead. This will concatenate 1000 to the end of numbers.
numbers.concat(1000);
console.log(numbers); // [1, 2, 3, 4];

// You can see it didn't change the original numbers array, but it did return a new one. If we log out the result of this, we can see we've got our new array with 1000 and then we haven't changed numbers.
console.log(numbers.concat(1000)); // [1, 2, 3, 4, 1000];

// Concat can also handle more than single items, so you could add a couple items here and it will stick all of them onto the end of array.
numbers.concat(1000, 200, 300);
console.log(numbers.concat(1000, 200, 300)); // [1, 2, 3, 4, 1000, 200, 300];

// You can also pass in an entire array and it'll put them together into one flattened array. It's always nice to have options.
numbers.concat(moreNumbers);
console.log(numbers.concat(moreNumbers)); // [1, 2, 3, 4, 5, 6, 7, 8];

// Another way you can do this is to make a new array and use the spread operator to spread out the original numbers, then spread out more numbers.
console.log([...numbers, ...moreNumbers]); // [1, 2, 3, 4, 5, 6, 7, 8];
// This has the same effect as concat.

// You could also add stuff to the end, to the beginning, or in between. It'll combine all of that into one.
console.log([0, ...numbers, 45, 99, ...moreNumbers, 3234]);
