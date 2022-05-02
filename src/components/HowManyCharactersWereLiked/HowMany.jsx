import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes, addDislikes } from 'redux/likesSlice';

export const HowManyCharactersWereLiked = ({ characterId }) => {
  //   const [likes, setLikes] = useState([]);
  //   const [dislikes, setDislikes] = useState([]);
  const [data, setData] = useState(null);
  const reduxLikes = useSelector(state => state.likes.dataLikes);

  const reduxDislikes = useSelector(state => state.likes.addDislikes);

  const dispatch = useDispatch();

  const countLikes = () => {
    const data = JSON.parse(localStorage.getItem('charactersData'));
    if (data.dislikes) {
      dispatch(addDislikes(data));

      //   movieAPI.fetchLikedCharacters(dislikes).then(setData);
    } else {
      dispatch(addLikes(data));
      //   movieAPI.fetchLikedCharacters(likes).then(setData);
    }
  };
  const fetchLikes = () => {
    if (reduxLikes) {
      reduxLikes.map(like =>
        movieAPI.fetchLikedCharacters([like.id]).then(setData)
      );
    } else {
      reduxDislikes.map(like =>
        movieAPI.fetchLikedCharacters([like.id]).then(setData)
      );
    }
  };
  console.log(data);
  return (
    <>
      <button style={{ color: 'red' }} onClick={fetchLikes}></button>
    </>
  );
};
