import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';

export const HowManyCharactersWereLiked = () => {
  const [likes, setLikes] = useState(null);
  const [dislikes, setDislikes] = useState(null);

  const countLikes = () => {
    const data = JSON.parse(localStorage.getItem('charactersData'));
    console.log(data.id);
    if (data.dislikes) {
      const dislikedCharacters = [].push(data.id);

      movieAPI.fetchLikedCharacters(dislikedCharacters).then(setDislikes);
    } else {
      const likedCharacters = [].push(data.id);
      console.log(likedCharacters);
      movieAPI.fetchLikedCharacters(likedCharacters).then(setLikes);
    }
  };
  countLikes();
  return (
    <>
      <button style={{ color: 'red' }}></button>
    </>
  );
};
