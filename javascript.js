
class Book {
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleRead(){
        this.isRead = !this.isRead;
    }
}

const myLibrary = [];

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        
        bookDiv.innerHTML = `
        <p><strong>${book.title}</strong></p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.isRead ? "Read" : "Not read"}</p>
        <button onclick="toggleReadStatus(${index})">Change status</button>
        <button onclick="removeBook(${index})">Delete</button>
        `;

        libraryDiv.appendChild(bookDiv);
    });
}

function toggleReadStatus(index){
    myLibrary[index].toggleRead();
    displayBooks();
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

document.getElementById("book-form").addEventListener("submit", function(event){
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    const newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    displayBooks();

    this.reset();
});