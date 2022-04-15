import { useEffect, useState } from 'react';
import {
  Outlet,
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from 'react-router-dom';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import * as movieApi from '../../services/movie-api';

const MoviePage = ({ goBack }) => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const params = useParams();
  const location = useLocation();
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
          placeholder="Search movie"
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
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviePage;
