import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Description } from './MoviePageView.styled';
import { Img } from './MoviePageView.styled';
import { Div } from './MoviePageView.styled';
import * as movieApi from '../../../services/movie-api';

const MoviePageView = ({ goBack }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {!movie && <h2>Loading...</h2>}
      <button type="button" onClick={goBack}>
        Go Back
      </button>
      {movie && (
        <div key={movie.id}>
          <h2>{movie.name}</h2>{' '}
          <Div>
            <Img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            ></Img>
            <Description>
              <h3>{movie.original_title}</h3>
              <p>{movie.vote_average}</p>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <h5>Genres</h5>
              {movie.genres.map(genre => (
                <p>{genre.name.split(',')}</p>
              ))}

              {/* <ul>
                <li key={movie.id}>
                  Overview
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
              </ul> */}
            </Description>
          </Div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MoviePageView;
