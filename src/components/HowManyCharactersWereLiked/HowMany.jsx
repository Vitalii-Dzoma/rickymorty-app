import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Description } from './HowMany.styled';
import { Img } from 'components/MoviePage/MoviePageView/MoviePageView.styled';
import * as movieAPI from '../../services/movie-api';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes, addChars } from 'redux/likesSlice';

export const HowManyCharactersWereLiked = ({ characterId }) => {
  const [arr, setArr] = useState([]);
  const [dataLikes, setDataLikes] = useState(null);
  const reduxLikes = useSelector(state => state.likes.dataLikes);
  const emptyArr = [];
  const onFillArr = () => {
    reduxLikes.forEach(element => {
      emptyArr.push(element.id);
    });
    return emptyArr;
  };

  const fetchLikes = () => {
    setArr([...arr, ...onFillArr()]);
    if (arr.length > 0) {
      movieAPI.fetchLikedCharacters(arr).then(setDataLikes);
    }
  };

  return (
    <>
      <button style={{ color: 'red' }} onClick={fetchLikes}>
        Double click!{' '}
      </button>
      <h2>
        Liked Characters
        {dataLikes &&
          dataLikes.map(character => (
            <div key={character.id}>
              <Img src={character.image}></Img>
              <h3>{character.species}</h3>
              <p>{character.status}</p>
              <h4>Location</h4>
              <p>{character.location.name}</p>
              <h5>Gender</h5>
              <p>{character.gender}</p>
            </div>
          ))}
      </h2>
      ;
    </>
  );
};
