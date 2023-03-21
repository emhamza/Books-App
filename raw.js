class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.allBooks = [];

    if (localStorage.getItem('allBooks') !== null) {
      this.allBooks = JSON.parse(localStorage.getItem('allBooks'));
    }
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.allBooks.push(book);
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
    this.displayBooks();
  }

  removeBook(index) {
    this.allBooks.splice(index, 1);
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
    this.displayBooks();
  }

  displayBooks() {
    const listB = document.getElementById('main-list');
    listB.innerHTML = '';

    this.allBooks.forEach((b, index) => {
      const table = document.createElement('tr');
      const bookTitle = document.createElement('td');
      bookTitle.textContent = b.title;
      table.appendChild(bookTitle);

      const bookAuthor = document.createElement('td');
      bookAuthor.textContent = b.author;
      table.appendChild(bookAuthor);

      const removeB = document.createElement('td');
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = 'Remove';
      removeBtn.classList = 'float float-end btn btn-sm';
      removeBtn.style = 'background-color: red;color:white;padding:10px;';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });
      removeB.appendChild(removeBtn);
      table.appendChild(removeB);

      listB.appendChild(table);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('book-form');
  const library = new Library();

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = myForm.title.value;
    const author = myForm.author.value;
    if (title !== '' && author !== '') {
      library.addBook(title, author);
      myForm.reset();
    }
  });

  library.displayBooks();
});