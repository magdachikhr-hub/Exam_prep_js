// prompt("what is your name");
// alert("reload");
// confirm("agree or not");
// console.log(prompt("hi"));

//1.1,1.2,1.3,1.4

const outputHtml = document.querySelector(".output");

const number1 = 50;
const number2 = 45;

function getSum() {
  const sum = number1 + number2;
  console.log(sum);
  return sum;
}

getSum();

//meore gza // better one
function getSum(a, b) {
  const sum = a + b;
  console.log(sum);
  return sum;
}
const sumNumber = getSum(number1, number2);
outputHtml.textContent = sumNumber;

//2.1
const age1 = 22;
const age2 = 17;

if (age1 >= 18) {
  console.log("adult");
} else {
  console.log("underage");
}

//2.2
//ლუწი
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// კენტი
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//2.3

const button = document.querySelector(".text");
const buttonText = document.querySelector(".buttonText");

button.addEventListener("click", () => {
  console.log("clicked");
  buttonText.textContent = `clicked`;

  //we could also use alert

  button.addEventListener("click", () => {
    alert("connection is not stable");
  });
});

//2.4   js events

const nameInput = document.getElementById("input");

nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});

//3.1
const arr = [
  "ana",
  "nika",
  "elene",
  "diana",
  "avtandili",
  "nini",
  "levani",
  "nugzari",
  "qetevani",
  "zura",
  "teona",
];

let newaArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    console.log(arr[i]);
    newaArr.push(arr[i]);
  }
}

console.log(newaArr);

//3.2

arr.push("magda");

arr.unshift("natia");

console.log(arr);

//3.3
const arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];

arrOfAges.forEach((item) => {
  if (item > 18) {
    console.log(item);
  }
});

//another way
const newAges = arrOfAges.filter((item) => item > 18);
console.log(newAges);

//3.4

const arr1 = [-2, 0, 5, 9, 1];
const arr2 = [6, 3, -4, 10, 7];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//klebadobit daxarisxeba

arr3.sort((a, b) => b - a);
console.log(arr3);

//zrdadi daxarisxeba

arr3.sort((a, b) => a - b);
console.log(arr3);

//4.1

let currentTime = new Date();

console.log(currentTime);

const day = currentTime.getDate();
console.log(day);

const month = `${currentTime.getMonth() + 1}th month`;
console.log(month);

const year = currentTime.getFullYear();
console.log(`year is :`, year);

//i added
const today = document.querySelector(".date");

today.innerHTML = `<p>Day: ${day}</p>
  <p>Month: ${month}</p>
  <p>Year: ${year}</p>`;

//4.2

const name = "gocha";

console.log(name.toUpperCase());

//4.3

window.addEventListener("load", () => {
  console.log("loaded");
});

//4.4

// setInterval(() => {
//   console.log("hi");
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }, 1000);

//5.1

const container = document.getElementById("container");
console.log(container);

const circle = document.querySelector(".circle");
console.log(circle);

//5.2

const select = document.querySelectorAll(".select");
console.log(select);

container.style.backgroundColor = "grey";

select.forEach((span) => {
  span.style.fontSize = "30px";
});

//add class
circle.classList.add("round");
circle.setAttribute("class", "round");
circle.setAttribute("id", "round");
circle.setAttribute("src", "round");
circle.setAttribute("href", "round");

//5.3

const paragraph = document.createElement("p");
console.log(paragraph);

paragraph.textContent = "this is a paragraph";
paragraph.style.color = "red";
container.append(paragraph);

//5.4

paragraph.addEventListener("click", () => {
  console.log("success");
});

nameInput.addEventListener("blur", () => {
  console.log("it is blur");
});

//6.1

const post = {
  userId: 56,
  id: 100,
  title: "this is the title",
  body: "quo iurevoluptatem occaecati omnis eligendi a",
};

async function userPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await response.json();
    console.log(data);
    //i added
    output.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <p>UserId: ${data.userId}</p>
    `;
    //
  } catch (error) {
    console.log(error);
  }
}

userPost();

//i added
const output = document.querySelector(".output");

//6.2

async function getPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPosts();
