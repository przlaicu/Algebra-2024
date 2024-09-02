/**
 * CONSOLE OUTPUT!
 */
// JavaScript Basics
// {"title":"JavaScript Basics","author":"John Doe","year":2023}
// Added 2 books to the library.
// The Great Gatsby has been borrowed.
// Discount for Science books: 20%

//         Library Name: City Central Library
//         Total Books: 1000
//         Available Genres: Fiction, Non-Fiction, Science, History, Biography, Mystery, Romance

// Data Types & Operators

// Variable Scope & Functions
function addBook(title, author) {
    // Function scope
    
    // String interpolation

    // Return an object

}

// Global variable
var totalBooks = 1000; // implement global variable

// Arrays
let genres = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography']// implement the array

// Switch
function getCategoryDiscount(genre) {

}

// Objects
let library = {

};

// Converting JSON into an object
let bookJSON = '{"title":"JavaScript Basics","author":"John Doe","year":2023}';
// TODO
var bookObject = JSON.parse(bookJSON);
console.log('Zadatak prvi')
console.log(bookObject.title); // Output: JavaScript Basics


// Converting an object into JSON
// TODO

console.log('Zadatak drugi')
var bookJSON2 = JSON.stringify(bookObject);
console.log(bookJSON2); // Output: {"title":"JavaScript Basics","author":"John Doe","year":2023}

// Constructor
function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre
}

// Prototypes
Book.prototype.borrow = function() {

};


// Rest operator
function addMultipleBooks(...books) {

}

// Spread operator
let newGenres = ["Mystery", "Romance"];

// Windows methods (Note: These will only work in a browser environment)
function displayLibraryInfo() {

}

// Main execution
function main() {
    // Create some books
    let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
    let book2 = new Book("A Brief History of Time", "Stephen Hawking", "Science");

    // Add books to library
    addBook(book1);
    addBook(book2);

    // Borrow a book

    // Get discount for a genre


    // Display library info (this would work in a browser)
    // displayLibraryInfo();

    // Generate a report

}

// Helper function to generate a unique book ID
function generateBookId() {
    
}

// Run the main function
main();
