document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.getElementById("book-form");
  const listB = document.getElementById("main-list");
  let allBooks;

  if (localStorage.getItem("allBooks") !== null) {
    allBooks = JSON.parse(localStorage.getItem("allBooks"));
  } else {
    allBooks = [];
  }

  ///////////////////////////////////////
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    addBook() {
      allBooks.push({ title, author });
      localStorage.setItem("allBooks", JSON.stringify(allBooks));
      myForm.reset();
      displayBooks();
    }

    delBook(id) {
      allBooks.splice(id, 1);
      localStorage.setItem("allBooks", JSON.stringify(allBooks));
      displayBooks();
    }
  }

  const newBook = new Book(title, author);

  //////////////////////////////////////////////////////////

  function displayBooks() {
    // function delBook(id) {
    //   allBooks.splice(id, 1);
    //   localStorage.setItem("allBooks", JSON.stringify(allBooks));
    //   displayBooks();
    // }
    newBook.delBook(id);

    listB.innerHTML = "";

    allBooks.forEach((b, index) => {
      const bookTitle = document.createElement("p");
      bookTitle.textContent = b.title;
      listB.appendChild(bookTitle);

      const bookAuthor = document.createElement("p");
      bookAuthor.textContent = b.author;
      listB.appendChild(bookAuthor);

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        delBook(index);
      });
      listB.appendChild(removeBtn);

      const hr = document.createElement("hr");
      listB.appendChild(hr);
    });
  }

  newBook.addBook(title, author);
  // function addBook(title, author) {
  //   allBooks.push({ title, author });
  //   localStorage.setItem("allBooks", JSON.stringify(allBooks));
  //   myForm.reset();
  //   displayBooks();
  // }

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = myForm.title.value;
    const author = myForm.author.value;
    if (title !== "" && author !== "") {
      addBook(title, author);
    }
  });

  displayBooks();
});
