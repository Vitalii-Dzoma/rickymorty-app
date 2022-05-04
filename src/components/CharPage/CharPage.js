import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import * as movieApi from '../../services/chars-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Input, Button, Form, Ul } from './CharPage.styled';
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
      <Form onSubmit={HandleSubmit}>
        <Input
          type="text"
          name=""
          value={name}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search character"
        />{' '}
        <Button type="submit">Search</Button>
      </Form>

      <Outlet />

      {movies && (
        <Ul>
          <Button type="submit" onClick={GoBackBtnRender}>
            Go Back
          </Button>
          <PageHeading>Results</PageHeading>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/characters/${movie.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {movie.name}
              </Link>
            </li>
          ))}
        </Ul>
      )}
    </>
  );
};

export default MoviePage;
