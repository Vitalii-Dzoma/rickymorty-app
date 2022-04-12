import { useState, useEffect, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { Img } from './Cast.styled';
import { DivImage } from './Cast.styled';
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
      <Suspense fallback={<div>Loading...</div>}>
        {movies && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {movies.map(movie => (
              <li key={movie.id}>
                <Img
                  src={`https://image.tmdb.org/t/p/w200/${movie.profile_path}`}
                ></Img>
                <DivImage>
                  <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
                  <p>Character: {movie.character}</p>
                </DivImage>
              </li>
            ))}
          </ul>
        )}
      </Suspense>
    </>
  );
};

export default Cast;
