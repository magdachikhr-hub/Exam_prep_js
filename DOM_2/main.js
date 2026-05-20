async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log(data);
    renderHtml(data);
  } catch (error) {
    console.log(error);
  }
}

getPost();

const container = document.querySelector(".container");

function renderHtml(data) {
  container.innerHTML = `
  <h1>${data.title}</h1>
<p>${data.body}</p>
  `;
}

//
