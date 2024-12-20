function fetchBooks() {
  return nfetch("https://anapioficeandfire.com/api/books/")
  .then(response => response.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    // console.log(books)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
