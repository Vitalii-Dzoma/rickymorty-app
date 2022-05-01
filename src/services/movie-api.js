import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export async function fetchAllCharacters() {
  const response = await axios.get('/character');
  return response.data.results;
}

export async function fetchAllLocation(id) {
  const response = await axios.get(`/location/${id}`);
  console.log(response.data.results);
  return response.data;
}

export async function fetchAllEpisodes() {
  const response = await axios.get(`/episode`);
  return response.data.cast;
}

export async function fetchCharactersById(id) {
  const response = await axios.get(`/character/${id}`);
  return response.data;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${query}`
  );
  return response.data.results;
}
