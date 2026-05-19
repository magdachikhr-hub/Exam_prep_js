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

heading.innerHTML += `hi this is ${userOne.name} `;

// martivi if else
let age2 = 30;
let result2 = age2 > 18 ? "adult" : "minor";

// Date();
// Promise();
// Math.random();
// Math.abs();

for (let i = 0; i < 5; i++) {
  console.log(i);
}

array.forEach((user, i) => {
  console.log(user.name, i);

  const newDiv = document.createElement("div");
  newDiv.textContent = user.name;

  heading.append(newDiv);

  console.log(heading.getAttribute("class"));
  heading.setAttribute("class", "dark");
});

// function removeString(html) {
//   html.textContent = "";
// }

// removeString(heading);

// function removeString(html) {
//   const text = (html.textContent += " hiiiiii");
//   return text;
// }

removeString(heading);

heading.addEventListener("click", (e) => {
  console.log(e.target);
});
