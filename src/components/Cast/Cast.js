import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { Img } from './Cast.styled';
import { PageHeading } from 'components/PageHeading/PageHeading';

const Cast = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieAPI.fetchMoviesDetails(movieId).then(setMovies);
  }, [movieId]);
  console.log(movies);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Img
                src={`https://image.tmdb.org/t/p/w200/${movie.profile_path}`}
              ></Img>

              <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
              <p>Character: {movie.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
