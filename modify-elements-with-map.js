// ** MODIFY ELEMENTS IN AN ARRAY WITH MAP **
/*
     When you need to modify every element of an array, or even just a single one, the map method is the one to use. Here you'll learn how to use map and pass it a function to transform an array.
*/

const people = [
  {
    first: "Dan",
    last: "Abramov",
    handle: "@dan_abramov",
  },
  {
    first: "Ali",
    last: "Spittel",
    handle: "@ASpittel",
  },
  {
    first: "Sarah",
    last: "Drasner",
    handle: "@sarah_edo",
  },
];

// say we wanted to take the first names from the above array.
// we can use the .map function
// .map takes a function as an argument and that function receives each item of the array in turn
const names = people.map((person) => {
  return person.first; // will return the first name of each person
});
// the result of this call to map will be a brand new array made up of all the first names
console.log(names); //  ['Dan', 'Ali', 'Sarah']

// Map is a good function to use whenever you want a new array that has the same number of items as the old one. There is no way to skip items in map. If you want to SKIP certain items, then you will want to use filter instead.

// The map function is also helpful if you want to change items in an array. It is important to note, however, that the items that get passed into the function actually are referring to the original items.

const namesUpdate = people.map((person) => {
  person.first += "!!!";
  return person;
});
console.log(namesUpdate);

/*
    0: {first: 'Dan!!!', last: 'Abramov', handle: '@dan_abramov'}
    1: {first: 'Ali!!!', last: 'Spittel', handle: '@ASpittel'}
    2: {first: 'Sarah!!!', last: 'Drasner', handle: '@sarah_edo'}
*/
console.log(people);
// the original people array has been modified as well because we modified EACH person as it went through the function

// A better way to do something like this where you want to update each item is to return a new item and copy in all of the properties from person using the spread operator and then changing the first name. This way it will leave the original array alone.
const namesUpdated = people.map((person) => {
  return {
    ...person,
    first: person.first + "!!!",
  };
});
console.log(namesUpdated); // updated array with !!! on first names
console.log(people); // original array left alone

// the second argument available in .map is the index. If you wanted to update a specific item at a specific index then this is available

// people.map(person, index){}

// **comment out from top down to see changes**
