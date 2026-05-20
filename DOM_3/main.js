//1.1

const result = document.querySelector(".result");

function getSum() {
  let number1 = 20;
  let number2 = 40;

  let sum = number1 + number2;
  console.log(sum);

  result.innerHTML = `the sum is ` + sum;
}

getSum();

//2.1

let age1 = 15;
let age2 = 17;

if (age1 > 18 && age2 > 18) {
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
  buttonText.innerHTML = `clicked`;
});

//2.4   js events

const inpt = document.getElementById(".input");

input.addEventListener("input", () => {
  console.log(input.value);
});
