import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { Ul } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieAPI.fetchReviews(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <Ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </Ul>
      ) : (
        <h3>There are no reviews yet</h3>
      )}
    </>
  );
};

export default Reviews;
