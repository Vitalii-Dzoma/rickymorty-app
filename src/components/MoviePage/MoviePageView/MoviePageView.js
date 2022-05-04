import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Description } from './MoviePageView.styled';
import { Img } from './MoviePageView.styled';
import { Div } from './MoviePageView.styled';
import * as movieApi from '../../../services/movie-api';
import { LikeOrDislike } from '../../PageLikeButton/PageLikeButton';
import { HowManyCharactersWereLiked } from 'components/HowManyCharactersWereLiked/HowMany';
const MoviePageView = ({ goBack }) => {
  const { movieId } = useParams();
  const [character, setMovie] = useState(null);

  useEffect(() => {
    movieApi.fetchCharactersById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {!character && <h2>Loading...</h2>}
      <button type="button" onClick={goBack}>
        Go Back
      </button>
      {character && (
        <div key={character.id}>
          <h2>{character.name}</h2>{' '}
          <Div>
            <Img src={character.image}></Img>

            <Description>
              <h3>{character.species}</h3>
              <p>{character.status}</p>
              <h4>Location</h4>
              <p>{character.location.name}</p>
              <h5>Gender</h5>
              <p>{character.gender}</p>
              <LikeOrDislike characterId={character.id} />
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
