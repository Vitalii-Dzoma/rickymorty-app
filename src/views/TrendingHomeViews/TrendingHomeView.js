import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { PageHeading } from 'components/PageHeading/PageHeading';

const TrendingHomeView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieAPI.fetchTrendingMovies().then(setMovies);
    console.log(movies);
  }, []);

  return (
    <>
      <PageHeading>Trending today</PageHeading>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TrendingHomeView;
