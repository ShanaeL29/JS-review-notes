// ** REMOVE ELEMENTS FROM AN ARRAY WITH FILTER
/*
    If you need to find and remove one (or multiple) items from an array, the filter method is a quick way to do just that. In this lesson you'll learn how to pass a function to filter to remove specific items from an array. You can also use it for the inverse -- to keep the items that match a certain condition.
*/

// Using the 'filter' method on arrays
const spices = [
  { id: 1, name: "Black Pepper" },
  { id: 2, name: "Turmeric" },
  { id: 3, name: "Cumin" },
  { id: 4, name: "Coriander" },
  { id: 5, name: "Chili Powder" },
  { id: 6, name: "Coriander" },
];

// If we have an array and we want to remove some of the items, we can use the filter function on the array. We can say spices.filter, and filter takes a function that's going to get each array item in turn. The result of calling filter is going to be a new array with potentially fewer items.

// const filteredSpices = spices.filter(spice => {

// })

// From inside this function, if you return a truthy value, that will keep the item. If you return a falsey value, that will discard it.

// If we wanted to filter down to only this item, coriander, with the ID 4, we could say return spice.id = 4.

const filteredSpices = spices.filter((spice) => {
  return spice.id === 4;
});

// Now, if we log out our filtered spices, you'll see we get an array with one object, and that's coriander.
console.log(filteredSpices); // {id: 4, name: 'Coriander'}

// Let's also log out the original array of spices. You can see that it hasn't changed at all. It still has all the spices in it.
console.log(spices); // it has not changed at all. It is still complete

// Rather than mutating the array you call it on, filter is going to return a brand-new array.

// We could try some other things here like saying we want the spice IDs that aren't 4. This will give us everything but coriander. Now we've got four spices here.

/*
    const filteredSpices = spices.filter((spice) => {
    return spice.id !== 4;
    });
    console.log(filteredSpices); // returns everything except Coriander
    console.log(spices);
*/

// We could also do something like only keep the spices that start with C by doing spice.name.startsWith('C').

/*
    const filteredSpices = spices.filter((spice) => {
    return spice.name.startsWith("C");
    });
    console.log(filteredSpices); // Now, we only have the three spices that start with C.
*/

// Filter is a great choice whenever you want to create a new array that may have fewer items than the one you started with.
