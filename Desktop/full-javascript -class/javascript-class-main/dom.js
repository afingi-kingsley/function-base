// // // console.log(document);
// // const root = document.getElementById("root");

// // console.log((root.innerHTML = "<h1>Hello World</h1>"));
// // console.log((root.style.color = "green"));
// // console.log((root.style.backgroundColor = "#4444"));
// // console.log((root.style.padding = "10px"));
// const root = document.querySelector(".root");
// console.log((root.innerHTML = "<h1>Hello World</h1>"));
// console.log((root.style.color = "green"));
// console.log((root.style.backgroundColor = "#4444"));
// console.log((root.style.padding = "10px"));
// const heading = document.querySelector("h1");
// console.log((heading.style.color = "red"));
// console.log((heading.style.backgroundColor = "yellow"));
// console.log((heading.style.textAlign = "center"));
// console.log((heading.style.padding = "10px"));
// console.log((heading.style.borderRadius = "10px"));
// console.log((heading.style.boxShadow = "0 0 10px 0 #000"));
// console.log((heading.innerText = "Welcome to my page"));
// console.log(heading.setAttribute("id", "heading"));

const lists = document.querySelector(".lists");

// Event

// const handleClick = (e) => {
//   alert("Hello World", e);
// };
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
// users.forEach((user) => {
//   return (lists.innerHTML += `<li>${user.fname} ${user.lname} ${user.age}</li>`);
// });

const button = document.getElementById("btn");
const root = document.querySelector(".root");
const body = document.querySelector("body");
const form = document.getElementById("form");

// Click event
// button.addEventListener("click", function () {
//   return alert("Hello World");
// });


// // Mouve event
// button.addEventListener("mouseover", function () {
//   return (body.style.backgroundColor = "green");
// });
// button.addEventListener("mouseleave", function () {
//   return (body.style.backgroundColor = "red");
// });
// button.addEventListener("mouseenter", function () {
//   return (button.innerText = "Mouse Enter");
// });

// heading.addEventListener("copy", function () {
//   heading.style.backgroundColor = "coral";
//   heading.style.color = "white";
//   return alert("You have copied the text");
// });

// heading.addEventListener("paste", function (e) {
//   console.log(e);
//   heading.style.backgroundColor = "green";
//   heading.style.color = "white";
//   return alert("You have pasted the text");
// });
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log(event);
//   const inputName = document.getElementById("name").value;
//   const inputAge = document.getElementById("age").value;
//   console.log(inputName, inputAge);
//   // return alert(`Hello ${inputName} ${inputAge}`);
// });
button.addEventListener("click", function (event) {
  console.log(event);
  const title = document.querySelectorAll("h1");
  // console.log(title.forEach((li) => (li.style.color = "coral")));
  console.log(
    title.forEach((li, index) => {
      return index === 0
        ? (li.style.color = "green")
        : (li.style.color = "purple");
    })
  );
});
