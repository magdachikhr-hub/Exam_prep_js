//1.1, 1.2, 1.3, 1.4

const value1 = 60;
const value2 = 40;

function calculateDifference(value1, value2) {
  const diff = value1 - value2;
  console.log(diff);
  return diff;
}

calculateDifference(value1, value2);

//2.1

const inputText = document.getElementById("inputText");

inputText.addEventListener("change", () => {
  console.log(inputText.value);
});

//2.2
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  console.log("clicked");
});

//2.3

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//2.4

const temperature = 67;

if (temperature > 30) {
  console.log("temperatura metia 30 gradusze");
} else {
  console.log("temperatura naklebia 30 gradusze");
}
