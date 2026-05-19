const heading = document.querySelector(".header");

console.log(heading.innerHTML);

console.log("break");

console.log(heading.textContent);

// A variable declared inside a function is used first inside that function,
// even if there’s a variable with the same name outside. So `console.log(number)` inside the function prints `50`, not `23`.

let array = [
  {
    name: "magda",
    age: 20,
  },
  {
    name: "natia",
    age: 23,
  },
];

let userOne = array[0];

console.log(userOne.name);
console.log(userOne.age);

heading.innerHTML += "(some text)";

heading.innerHTML += `hi this is ${userOne.name}`;
