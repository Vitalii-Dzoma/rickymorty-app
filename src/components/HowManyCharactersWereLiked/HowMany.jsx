import { useState } from 'react';

import { Img } from 'components/CharPage/CharPageView/CharPageView.styled';
import * as movieAPI from '../../services/chars-api';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/CharPage/CharPageView/CharPageView.styled';
import {
  Div,
  Description,
} from 'components/CharPage/CharPageView/CharPageView.styled';

export const HowManyCharactersWereLiked = ({ characterId }) => {
  const [arr, setArr] = useState([]);
  const [dataLikes, setDataLikes] = useState(null);
  const reduxLikes = useSelector(state => state.likes.dataLikes);

  const fetchLikes = () => {
    const datas = reduxLikes.map(el => el.id);

    if (datas.length > 0) {
      movieAPI.fetchLikedCharacters(datas).then(setDataLikes);
    }
  };

  return (
    <>
      <Button style={{ color: 'red' }} onClick={fetchLikes}>
        Press me!
      </Button>
      <h2>
        Liked Characters
        {dataLikes &&
          dataLikes.map(character => (
            <Div key={character.id}>
              <Img src={character.image}></Img>
              <Description>
                <h3>{character.species}</h3>
                <p>{character.status}</p>
                <h4>Location</h4>
                <p>{character.location.name}</p>
                <h5>Gender</h5>
                <p>{character.gender}</p>
              </Description>
            </Div>
          ))}
      </h2>
      ;
    </>
  );
};
