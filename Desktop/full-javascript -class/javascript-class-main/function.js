// "use strict";
// let x = 3.14;
// console.log(x);
// Normal Function
// function greet() {
//   console.log("Good Morning!");
// }
// greet();

// // Function with paramter
// function greet(name) {
//   console.log(`Good Morning! ${name}`);
// }
// greet("Kingsly");
// greet("Felix");

// function addByTwo(num1 = 2, num2) {
//   console.log(num1 * num2);
//   return;
//   console.log("hello");
// }
// addByTwo(2, 1);
// addByTwo(2, 2);
// addByTwo(2, 3);
// addByTwo(2, 4);
// addByTwo(2, 5);
// addByTwo(2, 6);
// addByTwo(2, 7);
// addByTwo(2, 8);
// addByTwo(2, 9);
// addByTwo(2, 10);
// addByTwo(2, 11);
// addByTwo(2, 12);
// Anonymous Function
// const sum = function (total, quantity, name) {
//   return console.log(
//     `${name} sold at ${total} per ${quantity} today in market total of ${
//       total * quantity
//     }`
//   );
// };

// sum(2000, 10, "rice");
// sum(980, 20, "Fuel");

// function addByTwo(num1 = 2, num2) {
//   console.log(num1 * num2);
//   return;
// }
// const userInfo = {
//   name: "Felix James",
// };
// const getUser = (name) => {
//   return name;
// };

// console.log(getUser(userInfo.name));
// Array
// const items = ["Rice", "Potatoes", "Oranges"];
// console.log(items.length);
// const users = [
//   {
//     id: 1,
//     name: "Felix James",
//     color: "black",
//     hobbies: ["reading", "Footballl"],
//   },
//   {
//     id: 2,
//     name: "Afing Kinsly",
//     color: "black",
//     hobbies: ["reading", "Footballl"],
//   },
// ];

// console.log(users[1]);
// Add to  array from the back
// users.push({
//   id: 3,
//   name: "Sam Vick",
//   color: "White",
//   hobbies: ["Game"],
// });
// // Add to  array from the start
// users.unshift({
//   id: 4,
//   name: "Oyin Precious",
//   color: "black",
//   hobbies: ["reading", "Footballl"],
// });

// // Remove Array from the back/end
// users.pop();

// // Remove Array from the start
// users.shift();

// console.log(users);

// // console.log(users[0]);
// const user = {
//   name: "Kingsly",
//   isMarried: false,
//   hobbies: ["Coding", "Phone"],
//   address: {
//     street: "Ogo Oluwa",
//     state: "Osun State",
//     city: "Oshogbo",
//   },
//   greet: (name) => {
//     return console.log(name);
//   },
// };

// // console.log(user.address.street);
// user.greet("Felix");
// delete user.name;
// console.log(user);
