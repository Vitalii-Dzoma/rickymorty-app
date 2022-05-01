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
    movieApi.fetchCharactersById(movieId).then(setMovie);
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
            <Img src={movie.image}></Img>
            <Description>
              <h3>{movie.species}</h3>
              <p>{movie.status}</p>
              <h4>Location</h4>
              <p>{movie.location.name}</p>
              <h5>Gender</h5>

              <p>{movie.gender}</p>

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
