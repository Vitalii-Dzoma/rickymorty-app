import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { PageHeading } from 'components/PageHeading/PageHeading';

const TrendingHomeView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieAPI.fetchAllCharacters().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading>Ricky&Morty</PageHeading>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/characters/${movie.id}`}>
                {movie.name}, Status: {movie.status}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default TrendingHomeView;
