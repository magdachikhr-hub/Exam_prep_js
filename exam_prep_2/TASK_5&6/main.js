//5.1

const newDiv = document.querySelector(".newDiv");

const newName = document.createElement("div");

newName.textContent = "hello";

console.log(newName);

newDiv.append(newName);

//5.2

const greet = document.getElementById("hii");
const greet2 = document.querySelector(".hello");
const greet3 = document.querySelectorAll(".hi");

console.log(greet);
console.log(greet2);
console.log(greet3);

greet.textContent = `helloow`;
greet2.textContent = `helloow`;

//5.3

const newLook = (greet.style.backgroundColor = "red");
greet2.style.fontSize = "35px";

//5.4

const element1 = document.querySelector(".element");
const element2 = document.querySelector(".element1");

element1.addEventListener("click", () => {
  alert("success");
});

element2.addEventListener("mouseover", () => {
  alert("success two");
});

element2.style.backgroundColor = "green";
element2.style.width = "100px";
element2.style.marginTop = "30px";

const focusInput = document.getElementById("inputFocus");

focusInput.addEventListener("focus", () => {
  console.log("nice");
});

// greet3.forEach((e) => {
//   e.addEventListener("kclick", () => {
//     console.log("done");
//   });
// });

focusInput.addEventListener("keydown", () => {
  console.log("done");
});

//6.1

user = {
  postId: 1,
  id: 1,
  name: "id laborum",
  email: "example@gmail.ge",
  body: "this is the body",
};

async function userPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

userPosts();

//6.2

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=3"
    );
    const data = await response.json();
    data.forEach((post) => {
      console.log(post);
      output.innerHTML = `
      <p>${post.name}</p>
      <p>${post.email}</p>
      <p>${post.body}</p>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

const output = document.querySelector(".output");
getPost();
