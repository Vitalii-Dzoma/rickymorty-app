import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Description } from './HowMany.styled';
import { Img } from 'components/MoviePage/MoviePageView/MoviePageView.styled';
import * as movieAPI from '../../services/movie-api';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes, addChars } from 'redux/likesSlice';

export const HowManyCharactersWereLiked = ({ characterId }) => {
  const [arr, setArr] = useState([]);
  //   const [dislikes, setDislikes] = useState([]);
  const [dataLikes, setDataLikes] = useState(null);
  const [dataDislikes, setDataDislikes] = useState(null);
  const reduxLikes = useSelector(state => state.likes.dataLikes);

  const dispatch = useDispatch();

  const countLikes = () => {
    const data = JSON.parse(localStorage.getItem('charactersData'));

    //   movieAPI.fetchLikedCharacters(dislikes).then(setData);

    dispatch(addLikes(data));
    //   movieAPI.fetchLikedCharacters(likes).then(setData);

    return data;
  };
  const fetchLikes = () => {
    countLikes();
    const emptyArr = [];
    reduxLikes.forEach(element => {
      emptyArr.push(element.id);
    });

    setArr([...arr, ...emptyArr]);
    console.log(arr);
    if (arr.length > 0) {
      movieAPI.fetchLikedCharacters(arr).then(setDataLikes);
    }
  };

  console.log(dataLikes);
  return (
    <>
      <button style={{ color: 'red' }} onClick={fetchLikes}>
        Liked characters
      </button>
      <h2>
        Liked Characters
        {dataLikes &&
          dataLikes.map(character => (
            <>
              <Img src={character.image}></Img>
              <h3>{character.species}</h3>
              <p>{character.status}</p>
              <h4>Location</h4>
              <p>{character.location.name}</p>
              <h5>Gender</h5>
              <p>{character.gender}</p>
            </>
          ))}
      </h2>
      ;
    </>
  );
};
