//3.1

const arr = [
  "gio",
  "mari",
  "salome",
  "luka",
  "dato",
  "anastasia",
  "irakli",
  "tamari",
  "saba",
  "giorgi",
  "nino",
];

const newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length < 5) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

//3.2
arr.unshift("natia");
arr.push("magda");
console.log(arr);

//3.3

let numbers = [4, 11, 23, 8, 19, 2, 30, 14, 27];

const evenNumbers = numbers.filter(function evenNumbers(e) {
  return e % 2 === 0;
});

console.log(evenNumbers);

//3.4

let firstArray = [12, -3, 7, 0, 25];
let secondArray = [5, 18, -1, 9, 2];

twoArrs = [...firstArray, ...secondArray];

console.log(twoArrs);

twoArrs.sort((a, b) => a - b);
console.log(twoArrs);

//for? of?

//4.1

window.addEventListener("load", () => {
  console.log("Page loaded successfully");
});

//4.2
setInterval(() => {
  for (let i = 10; i >= 1; i--) {
    // console.log(i);
  }
}, 2000);

//4.3

let city = "tbilisi";

let upperCaseCity = city.toUpperCase();

console.log(upperCaseCity);

//4.4

Date();

function timeToday() {
  const currentDate = new Date();

  //   console.log(currentDate);

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  //   console.log(hours);
  //   console.log(minutes);
  //   console.log(seconds);

  const time = document.querySelector(".time");

  time.innerHTML = `  <span>${hours} :</span>
 <span>${minutes}:</span>
  <span>${seconds}</span>`;
}

timeToday();

setInterval(timeToday, 1000);
