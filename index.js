function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const html = document.querySelector('main')
  books.forEach(book => {
    const h3 = document.createElement('h3')
    h3.innerHTML = book.name
    html.appendChild(h3)
  })
}

fetchBooks()