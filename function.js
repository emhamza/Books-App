document.addEventListener('DOMContentLoaded', () => {
        // Your JavaScript code here
        
        const myForm = document.getElementById('book-form');
const listB = document.getElementById('main-list');
let allBooks;

if (localStorage.getItem('allBooks') !== null) {
    allBooks = JSON.parse(localStorage.getItem('allBooks'));
} else {
    allBooks = [];
}

function delBook (id) {
    allBooks.splice (id, 1);
    localStorage.setItem('allBooks', JSON.stringify(allBooks));
    displayBooks ();
}

function displayBooks () {
    listB.innerHTML = '';
    
    allBooks.forEach((b, index) => {
        listB.innerHTML += `
          <p>${b.title}</p>
          <p>${b.author}</p>
          <button type="button" onclick="delBook(${index})" >Remove</button>
          <hr>
        `;
    });
}

function addBook(title, author) {
    allBooks.push({title, author});
    localStorage.setItem('allBooks', JSON.stringify(allBooks));
    myForm.reset();
    displayBooks();
}


myForm.addEventListener ('submit', (e) => {
    e.preventDefault();
    const title = myForm.title.value;
    const author = myForm.author.value;
    if (title !== '' && author !== '') {
        addBook(title, author);
    }

});

displayBooks ();
});