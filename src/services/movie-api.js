import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    '/trending/movie/day?api_key=3c97a1babd597f31c1fa5b3567357dfb'
  );
  console.log(response.data.results);
  return response.data.results;
}

// export async function fetchAuthorById(id) {
//   const response = await axios.get(`/authors/${id}?_embed=books`);
//   return response.data;
// }

// export async function fetchBooks() {
//   const response = await axios.get('/books');
//   return response.data;
// }

// export async function fetchBookById(bookId) {
//   const response = await axios.get(`/books/${bookId}?_expand=author`);
//   return response.data;
// }
