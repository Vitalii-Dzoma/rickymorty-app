import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Description } from './CharPageView.styled';
import { Img } from './CharPageView.styled';
import { Div } from './CharPageView.styled';
import { Button } from './CharPageView.styled';
import * as movieApi from '../../../services/chars-api';
import { LikeOrDislike } from '../../PageLikeComponent/PageLikeComponent';
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
      <Button type="button" onClick={goBack}>
        Go Back
      </Button>
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
