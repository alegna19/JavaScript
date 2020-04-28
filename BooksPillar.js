let favoriteBooks = [];

class Bookshelf{
  constructor(){
    this.favoriteBooks = [];
  }
  addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
  console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
  for (let bookName of this.favoriteBooks) {
    console.log(bookName);
    }
  }
}

function loadBooks(theBookShelf){
  
}

var BOOK_API = "http://someu.url/api";


function fakeAjax(url,cb){
  setTimeOut(function fakeLoadingDelay(){
    cb([
      "A song of Ice of Fire";
      "The Great Gatsy";
      "Great Expectations";
      "Romeo and Julieth";
      "Rayuela"
    ])
  })
}




printFavoriteBooks();
