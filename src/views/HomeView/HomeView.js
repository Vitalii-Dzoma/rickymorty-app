import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as movieAPI from '../../services/chars-api';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { Ul } from './HomeViews.styled';

const TrendingHomeView = () => {
  const [characters, setMovies] = useState(null);

  useEffect(() => {
    movieAPI.fetchAllCharacters().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading>Ricky&Morty</PageHeading>
      {characters && (
        <Ul>
          {characters.map(character => (
            <li key={character.id}>
              <Link
                to={`/characters/${character.id}`}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black',
                }}
              >
                {character.name}, Status: {character.status}
              </Link>
            </li>
          ))}
        </Ul>
      )}
      <Outlet />
    </>
  );
};

export default TrendingHomeView;
