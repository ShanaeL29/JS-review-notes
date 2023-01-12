// ** FIND ELEMENTS IN JAVASCRIPT ARRAYS WITH FIND AND FINDINDEX
/* 
    When you need to find an object in an array based on a property of that object, reach for the find and findIndex methods. You can supply a function to look up an item by any condition you can dream up. Want to find the first item larger than a certain number? Or the object with a certain id? Use find to get the array element, or findIndex to get the element's index.
*/

const spices = [
  { id: 1, name: "Black Pepper" },
  { id: 2, name: "Turmeric" },
  { id: 3, name: "Cumin" },
  { id: 4, name: "Coriander" },
  { id: 5, name: "Chili Powder" },
  { id: 6, name: "Coriander" },
];

// if we want to find a specific object in this array, we can use the find function on the array.

// find takes a function which will get each item in the array and return true if the item matches the one you want and false otherwise

const spice = spices.find((spice) => {
  return spice.name === "Coriander";
});

// the result of this call will be the FIRST item that matched. This is because find starts at the beginning and goes to the end and stops looking at the first one that turns true
console.log(spice); // { id: 4, name: "Coriander" }

// If you wanted to return the index of the item instead of the item itself then you could use findIndex. FindIndex works the same way but returns the INDEX of the first matching item
const spice = spices.findIndex((spice) => {
  return spice.name === "Coriander";
});
console.log(spice); // 3

// If the item is not there (always getting false), then for find you will get back UNDEFINED and for findIndex you will get back -1
