// // For Loop
// // let text = "";

// // const lists = ["Fish", "Yam", "Rice", "Beans"];
// // for (let i = 1; i < lists.length; i++) {
// //   console.log(`${i} - ${lists[i]}`);
// // }

// // const lists = ["Fish", "Yam", "Rice", "Beans"];

// // let text = "";
// // for (let i = 2; i < lists.length; i++) {
// //   console.log((text += lists[i]));
// // }
// // For In Loop
// // const person = { fname: "John", lname: "Doe", age: 25 };

// // let text = "";
// // for (let key in person) {
// //   console.log(key);
// //   text += person[key];
// // }
// // console.log(text);
// // Foreach
// // const numbers = [45, 4, 9, 16, 25];

// // let txt = "";
// // numbers.forEach((number, index, array) => {
// //   console.log(`${number} - ${index + 1}, ${array}`);
// // });
// //

// // const lists = ["Fish", "Yam", "Rice", "Beans"];

// // lists.forEach((list, index, array) => {
// //   console.log(`${list} - ${index}, ${array}`);
// // });

// // const users = [
// //   { fname: "John", lname: "Doe", age: 25 },
// //   { fname: "James", lname: "Mike", age: 25 },
// //   { fname: "Kingsly", lname: "Afingi", age: 25 },
// //   { fname: "Felix", lname: "Olawole", age: 25 },
// //   { fname: "Victor", lname: "Sam", age: 25 },
// //   { fname: "James ", lname: "Wale", age: 25 },
// // ];
// // users.forEach(function (user, index, array) {
// //   console.log(`${user.fname} - ${index}, ${array[index].lname}`);
// // });

// // const users = [
// //   { fname: "John", lname: "Doe", age: 25 },
// //   { fname: "James", lname: "Mike", age: 40 },
// //   { fname: "Kingsly", lname: "Afingi", age: 32 },
// //   { fname: "Felix", lname: "Olawole", age: 78 },
// //   { fname: "Victor", lname: "Sam", age: 23 },
// //   { fname: "James ", lname: "Wale", age: 26 },
// // ];
// // let text = "";
// // for (let x of users) {
// //   console.log(`My name is ${x.fname} ${x.lname}
// //      and i am ${x.age} years old`);
// // }
// // const lists = ["Fish", "Yam", "Rice", "Beans"];
// // for (let felix of lists) {
// //   console.log(`${felix}`);
// // }
// // While Loop

// const users = [
//   { fname: "John", lname: "Doe", age: 25 },
//   { fname: "James", lname: "Mike", age: 40 },
//   { fname: "Kingsly", lname: "Afingi", age: 32 },
//   { fname: "Felix", lname: "Olawole", age: 78 },
//   { fname: "Victor", lname: "Sam", age: 23 },
//   { fname: "James ", lname: "Wale", age: 26 },
// ];
// let text = "";
// let i = 0;
// // while (i < users.length) {
// //   console.log(users[i].lname);
// //   i++;
// // }

// do {
//   console.log(users[i].age);
//   i++;
// } while (i < users.length);

// Map
// const users = [
//   { fname: "John", lname: "Doe", age: 25 },
//   { fname: "James", lname: "Mike", age: 40 },
//   { fname: "Kingsly", lname: "Afingi", age: 32 },
//   { fname: "Felix", lname: "Olawole", age: 78 },
//   { fname: "Victor", lname: "Sam", age: 23 },
//   { fname: "James ", lname: "Wale", age: 26 },
// ];
// users.map((user, index, array) => console.log(user.fname));

// Destructuring Array & Object
// const users = [
//   { fname: "Victor", lname: "Sam", age: 23 },
//   { fname: "John", lname: "Doe", age: 25 },
//   { fname: "James", lname: "Mike", age: 40 },
//   { fname: "Kingsly", lname: "Afingi", age: 32 },
//   { fname: "Felix", lname: "Olawole", age: 78 },
//   {
//     fname: "James ",
//     lname: "Wale",
//     age: 26,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
// ];

// Object destructuring
// const user = {
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   address: {
//     street: "Ogo-Oluwa",
//     state: "Osun State",
//     city: "Osogbo",
//   },
// };
// const { fname, lname, age } = user;
// console.log(fname, lname, age);

// users.map(({ lname, fname, age }) => console.log(lname, fname, age));

// const lists = ["yams", "fish"];
// const [james, fish] = lists;
// console.log(james, fish);
// const [name1, name2, _, name4] = users;
// console.log(name1, name2, name4);

// Accessing Object in anested Object And Rename Object key
// const user = {
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   address: {
//     street: "Ogo-Oluwa",
//     state: "Osun State",
//     city: "Osogbo",
//   },
// };

// const { lname: lastName, fname: firstName, address: locations } = user;
// // const { state, city, street } = address;
// console.log(lastName, firstName, locations);
// const users = [
//   {
//     fname: "Victor",
//     lname: "Sam",
//     age: 23,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
//   { fname: "John", lname: "Doe", age: 25 },
//   { fname: "James", lname: "Mike", age: 40 },
//   { fname: "Kingsly", lname: "Afingi", age: 32 },
//   { fname: "Felix", lname: "Olawole", age: 78 },
//   {
//     fname: "James ",
//     lname: "Wale",
//     age: 26,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
// ];

// const [user1] = users;
// const { address, lname: lastName } = user1;
// console.log(lastName, user1);

// Spreed Operator
// const users = [
//   {
//     fname: "Victor",
//     lname: "Sam",
//     age: 23,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
//   { fname: "John", lname: "Doe", age: 25 },
//   { fname: "James", lname: "Mike", age: 40 },
//   { fname: "Kingsly", lname: "Afingi", age: 32 },
//   { fname: "Felix", lname: "Olawole", age: 78 },
//   {
//     fname: "James ",
//     lname: "Wale",
//     age: 26,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
// ];
// const user = {
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   address: {
//     street: "Ogo-Oluwa",
//     state: "Osun State",
//     city: "Osogbo",
//   },
// };
// const addUserDetails = {
//   ...user,
//   color: "black",
//   isMarried: false,
//   fname: "Oyinda",
//   age: 50,
//   attendance: "5%",
// };
// console.log(addUserDetails);
// const users = [
//   {
//     fname: "Victor",
//     lname: "Sam",
//     age: 23,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
//   { fname: "John", lname: "Doe", age: 25 },
//   { fname: "James", lname: "Mike", age: 40 },
//   { fname: "Kingsly", lname: "Afingi", age: 32 },
//   { fname: "Felix", lname: "Olawole", age: 78 },
//   {
//     fname: "James ",
//     lname: "Wale",
//     age: 26,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
// ];
// const extraUsers = [
//   {
//     fname: "Victor",
//     lname: "Sam",
//     age: 23,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
//   { fname: "John", lname: "Doe", age: 25 },
//   { fname: "James", lname: "Mike", age: 40 },
//   { fname: "Kingsly", lname: "Afingi", age: 32 },
//   { fname: "Felix", lname: "Olawole", age: 78 },
//   {
//     fname: "James ",
//     lname: "Wale",
//     age: 26,
//     address: {
//       street: "Ogo-Oluwa",
//       state: "Osun State",
//       city: "Osogbo",
//     },
//   },
// ];

// const addNewUser = [
//   ...users,
//   {
//     lname: "Precious",
//     fname: "Love",
//     age: 23,
//     color: "Brown",
//     isMarried: true,
//     hobbies: ["Coding", "Reading"],
//   },
// ];
// // console.log(addNewUser);
// console.log([...addNewUser, ...extraUsers, ...extraUsers]);
