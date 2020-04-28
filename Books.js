let favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

addFavoriteBook("Rayuela");
addFavoriteBook("Romeo and Julieth");
addFavoriteBook("The song of Ice and Fire");
addFavoriteBook("Great Expectations");

printFavoriteBooks();
