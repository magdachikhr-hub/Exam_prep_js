// prompt("what is your name");
// alert("reload");
// confirm("agree or not");

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
});

//2.4   js events

const inpt = document.getElementById(".input");

input.addEventListener("input", () => {
  console.log(input.value);
});

//3.1

let arr = [
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

let longNames = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    longNames.push(arr[i]);
  }
}

console.log(longNames);
