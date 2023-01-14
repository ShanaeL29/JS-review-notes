// function sayHi() {
//   console.log("hi");
// }

export default function sayHi() {
  console.log("hi");
}

export function printName(user) {
  console.log(user.firstName, user.lastName);
}

export const BASE_URL = "egghead.io";

// if (true) {
//   export const BASE_URL = "egghead.io";
// } // error!
