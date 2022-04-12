import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import * as movieApi from '../../services/movie-api';

const MoviePage = ({ goBack }) => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const handleChange = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const HandleSubmit = e => {
    e.preventDefault();
    const modifiedName = name.toLowerCase();
    movieApi.searchMovies(modifiedName).then(setMovies);
    navigate(`../movies?query=${name}`, { replace: false });
    reset();
    return name;
  };

  const reset = () => {
    setName('');
  };

  return (
    <>
      <button type="button" onClick={goBack}>
        Go Back
      </button>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name=""
          value={name}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <button type="submit">Search</button>
      </form>
      <Outlet />

      {movies && (
        <ul>
          <PageHeading>Results</PageHeading>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviePage;
