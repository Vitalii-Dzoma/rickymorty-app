import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import * as movieApi from '../../services/movie-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviePage = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const notify = () => toast('Wow so easy!');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const HandleSubmit = e => {
    e.preventDefault();
    const modifiedName = name.toLowerCase();
    movieApi.searchMovies(modifiedName).then(setMovies);
    notify();
    navigate(`../characters?query=${name}`, { replace: false });
    reset();
    return name;
  };

  const reset = () => {
    setName('');
  };

  const GoBackBtnRender = () => {
    navigate(-1, { replace: true });
  };

  useEffect(() => {
    if (searchParam.get('query')) {
      movieApi.searchMovies(searchParam.get('query')).then(setMovies);
    }
  }, [searchParam.get('query')]);

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name=""
          value={name}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search character"
        />

        <button type="submit">Search</button>
      </form>

      <Outlet />

      {movies && (
        <ul>
          <button type="submit" onClick={GoBackBtnRender}>
            Go Back
          </button>
          <PageHeading>Results</PageHeading>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/characters/${movie.id}`}>{movie.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviePage;
