import { useState, useEffect, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as movieAPI from '../../services/chars-api';
import { Img } from './Cast.styled';
import { DivImage } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    movieAPI.fetchCharactersById(movieId).then(setMovies);
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {movie && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key={movie.id}>
              <DivImage>
                <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
                <p>Character: {movie.name}</p>
                <p>Episodes: {movie.episode && movie.episode.length}</p>
              </DivImage>
            </li>
          </ul>
        )}
      </Suspense>
    </>
  );
};

export default Cast;
