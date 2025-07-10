function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // ⬅️ Add return here
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error("Error fetching books:", error);
    });
}
