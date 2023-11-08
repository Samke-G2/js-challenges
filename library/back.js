console.log("Simple Library Challenge") ;

// Create a Book constructor function that takes the following parameters: 
// title, author, and year. The constructor function should create an object with these properties.
function Book (title, author, year) {
    this.title = title ;
    this.author = author ;
    this.year = year ;
}


// Create an Author constructor function that takes the following parameters: firstName, lastName. 
// The constructor function should create an object with these properties and an empty array called books.
function Author(firstName, lastName) {
    this.firstName = firstName ;
    this.lastName = lastName ;
    this.books = [] ;
}


// Add a method to the Author prototype called addBook that takes a Book object as a parameter and adds it to the books array of the author.
Author.prototype.addBook = function(Book) {
    this.books[this.books.length] = Book ;
}



// Create a few Author and Book objects to represent authors and their books in the library.
const blackPres1 = new Author("Nelson", "Mandela") ;
const mamaWinnie = new Author("Winnie", "Madikizela-Mandela") ;
const poetKP = new Author("Koleka", "Puthuma") ;
const ironThrone = new Author("George RR", "Martin") ;

const autoBio = new Book ("Long Walk To Freedom", "Nelson Mandela", 1994) ;
const letters = new Book ("491 Days", "Winnie Madikizela-Mandela", 2013) ;
const anthology1 = new Book ("Collective Amnesia","Koleka Puthuma", 2017) ;
const anthology2 = new Book ("Hullo, Bu-bye, Koko, Come In", "Koleka Puthuma", 2021) ;
const asoiaf1 = new Book ("A Game of Thrones", "George RR Martin", 1996) ;


// Use the addBook method to add books to the respective authors.
    blackPres1.addBook(autoBio) ;
    mamaWinnie.addBook(letters) ;
    poetKP.addBook(anthology1) ;
    poetKP.addBook(anthology2) ;
    ironThrone.addBook(asoiaf1) ;


// Display the authors and their books in the console.
    console.log(blackPres1) ;
    console.log(mamaWinnie) ;
    console.log(poetKP) ;
    console.log(ironThrone) ;