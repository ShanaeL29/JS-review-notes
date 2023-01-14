// ** USE THE REDUCE FUNCTION ON ARRAYS **

/*
    The reduce method on arrays is probably the most powerful of them all.

    But it's also the most confusing.

    Reduce can transform an array into an object, a number, a boolean, or anything else you could need-- as long as you can figure out how to use it! In this lesson we'll start with a simple (and unique) example use for reduce, then build upon it to cover a few more advanced uses.
*/

const veggieDrawer = [
  "3 apples",
  "2 bad tomatoes",
  "fresh celery",
  "4 good onions",
  "1 bad onion",
  "rotten cilantro",
  "2 rotten red peppers",
  "garlic",
];

// The reduce function on arrays is the most general purpose of all of them. So it can stand in for filter, map, and also do even more than that.

// Reduce takes a function (we will call it reducer in example) and an initial value.

// Unlike filter and map which always return arrays, reduce can return anything. The initial value is usually going to be of the same form as our result.

// ----------------------------------------------------------
// We want to reduce our initial array of good and bad vegetables into a final array that has just the good ones.

// first we will write our reducer function

/*
    function reducer(bucket, item) {
    // we have an empty bucket: to start off with and then we add good veggies to it and our result is a bucket full of the good ones. Then item: the item we are at in the array. So the reducer is going to get called on each item in the array. Whatever we return from this reducer becomes the value of bucket for the next time around so it is a way of saving a value inbetween each call. In this case we are building out this array.

    console.log(bucket, item);
    return bucket; // If we just return bucket then our result is just going to be our initial value. The first time it's an empty array,
    }
    const initialValue = [];
    const goodVeggies = veggieDrawer.reduce(reducer, initialValue);

    console.log("result", goodVeggies);
*/

// We can see it gets called once for each item in the array and we get the empty bucket every time all the way through. When we log out result we can see that the goodVeggies is empty also
/*
    [] '3 apples'
    [] '2 bad tomatoes'
    [] 'fresh celery'
    [] '4 good onions'
    [] '1 bad onion'
    [] 'rotten cilantro'
    [] '2 rotten red peppers'
    [] 'garlic'
    result []
*/
// ----------------------------------------------------------

// SO LETS MAKE THIS WORK NOW
/*
    function reducer(bucket, item) {
    console.log(bucket, item);

    if (item.includes("bad") || item.includes("rotten")) {
        return bucket; // we want to just return the bucket as it is. If it was empty keep it empty and if other stuff is in it still don't add this one.
    }
    bucket.push(item); // otherwise if we are here then this item must be good so we put it in our bucket;
    return bucket;
    }
    const initialValue = [];
    const goodVeggies = veggieDrawer.reduce(reducer, initialValue);

    console.log("result", goodVeggies); // result (4) ['3 apples', 'fresh celery', '4 good onions', 'garlic'] // Only the good vegetables made it in
*/
// We could easily have written this with filter so we are not using reducer to its full potential here

// ----------------------------------------------------------

// Let's try returning a more complex value

/*
    function reducer(bucket, item) {
    console.log(bucket, item);

    if (item.includes("bad") || item.includes("rotten")) {
        return bucket;
    }

    const count = parseInt(item); // parseInt will stop at the first non-numeric characters (so '7 apples' will still give 7) but 'apples' would return NaN

    bucket.veggies.push(item);
    bucket.howManyGoodVeggies += isNaN(count) ? 1 : count; // we will use the built-in isNaN function to check whether count is NaN or not. If it is NaN then we will count it as 1 else we will use the count amount
    return bucket;
    }

    const initialValue = {
    veggies: [],
    howManyGoodVeggies: 0, // we should end up with 9 good vegetables
    };
    const goodVeggies = veggieDrawer.reduce(reducer, initialValue);

    console.log("result", goodVeggies); // result {veggies: Array(4), howManyGoodVeggies: 9}
*/

// RECAP: We are calling reduce on the array and passing in a reducer and the initial value. The initial value gets passed in to our reducer as the first item and then whatever the reducer returns get fed back into the next call for the next item. The final return value becomes the result of reduce and we log it out. In most cases the shape of the initial value (whether it is an array, number, object, etc) is going to match the shape of our final result. However, if we were to return a different value for the last item then our result could be a different shape than our intermediate accumulator.
// For example:

function reducer(bucket, item, index, array) {
  // we add 2 more arguments - the index of the item and the array itself - and check the index against the length of the array and return a different value based on that

  console.log(bucket, item);

  if (item.includes("bad") || item.includes("rotten")) {
    return bucket;
  }

  const count = parseInt(item);

  bucket.veggies.push(item);
  bucket.howManyGoodVeggies += isNaN(count) ? 1 : count;

  // we will return a summary string
  // You have 9 veggies: a, b, c // comma separated list of the veggies
  if (index === array.length - 1) {
    // if it is the last item then build out our string
    // our intermediate values will still be the same shape but our final value will be different shape
    return `You have ${
      bucket.howManyGoodVeggies
    } good veggies: ${bucket.veggies.join(", ")}`;
  }
  return bucket;
}

const initialValue = {
  veggies: [],
  howManyGoodVeggies: 0,
};
const goodVeggies = veggieDrawer.reduce(reducer, initialValue);

console.log("result", goodVeggies); // result You have 9 good veggies: 3 apples, fresh celery, 4 good onions, garlic
