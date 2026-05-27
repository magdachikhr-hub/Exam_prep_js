//1

const outputHtml = document.querySelector(".output");

const number1 = 50;
const number2 = 45;

// function getSum(){
// const sum = number1 + number2

// console.log(sum)
//  return sum
// }

function getSum(a, b) {
  const sum = a + b;
  console.log(sum);
  // outputHtml.textContent = sum

  return sum;
}

const sumNumber = getSum(number1, number2);

outputHtml.textContent = sumNumber;

//2

const age1 = 78;
const age2 = 16;

// if (age1 >= 18) {
//   console.log("srulwlovani");
// } else {
//   console.log("araswrulwlovani");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  alert("connection is not stable");
});

// prompt('what is your name')
// alert('connection is not stable')
// confirm('do you agree?')

// console.log(prompt('enter you name:'))

const nameInput = document.querySelector(".nameInput");

nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});

//3

// const arr = [
//   "ana",
//   "nika",
//   "elene",
//   "diana",
//   "avtandili",
//   "nini",
//   "levani",
//   "nugzari",
//   "qetevani",
//   "zura",
//   "teona",
// ];

// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > 5) {
//     console.log(arr[i]);
//     newArr.push(arr[i])
//   }
// }

// console.log(newArr)

// arr.push('natia')
// arr.unshift('gogi')

// console.log(arr)

arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];

// arrOfAges.forEach((item) =>{
// if(item > 18){
//     console.log(item)
// }
// })

const newAges = arrOfAges.filter((item) => item > 18);
// console.log(newAges)

const arr1 = [-2, 0, 5, 9, 1];
const arr2 = [6, 3, -4, 10, 7];

const arr3 = [...arr1, ...arr2];

// console.log(arr3)
arr3.sort((a, b) => a - b);
// console.log(arr3)

//4
// let currentTime = new Date()

// console.log(currentTime)

// const day = currentTime.getDate()
// console.log(day)
// const month = `${currentTime.getMonth() + 1}th month`
// console.log(month)

// const year = currentTime.getFullYear()
// console.log('year is :', year)

// const name = 'gocha'
// console.log(name.toUpperCase())

// window.addEventListener('load', () =>{
//     console.log('loaded')
// })

// setInterval(() =>{
// // console.log('hi')
// for(let i = 1; i <= 10; i++){
//     console.log(i)

// }

// }, 1000)

const container = document.getElementById("container");
// console.log(container)

// const circle = document.querySelector('.circle')
// console.log(circle)

// const select = document.querySelectorAll('.select')
// console.log(select)

// container.style.backgroundColor = 'grey'

// select.forEach((span) =>{
//    span.style.fontSize = '30px'
// })

// circle.classList.add('round')
// circle.setAttribute('class', 'round')
// circle.setAttribute('id', 'round')
// circle.setAttribute('src', 'round')
// circle.setAttribute('href', 'round')

const paragraph = document.createElement("p");
console.log(paragraph);

paragraph.textContent = "this is paragraph";
paragraph.style.color = "red";
container.append(paragraph);

paragraph.addEventListener("click", () => {
  console.log("success");
});

nameInput.addEventListener("blur", () => {
  console.log("it is blur");
});

//6

const post = {
  userId: 56,
  id: 100,
  title: "this is title",
  body: " quo iurevoluptatem occaecati omnis eligendi a",
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
  } catch (error) {
    console.log(error);
  }
}

userPost();

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
