import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    '/trending/movie/day?api_key=3c97a1babd597f31c1fa5b3567357dfb'
  );
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=3c97a1babd597f31c1fa5b3567357dfb`
  );
  return response.data;
}

export async function fetchMoviesDetails(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=3c97a1babd597f31c1fa5b3567357dfb`
  );
  return response.data.cast;
}

export async function fetchReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=3c97a1babd597f31c1fa5b3567357dfb`
  );
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `/search/movie?api_key=3c97a1babd597f31c1fa5b3567357dfb&language=en-US&query=${query}`
  );
  return response.data.results;
}
