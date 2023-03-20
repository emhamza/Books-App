const booksArray = [
  {
    title: "",
    author: "",
  },
];

const title = document.getElementById("title");
const author = document.getElementById("author");
const addButton = document.querySelector(".btn-add");

title.addEventListener("change", (e) => {
  const tltleInput = e.target.value;
});

author.addEventListener("change", (e) => {
  const authorInput = e.target.value;
});

addButton.addEventListener("click", () => {});
