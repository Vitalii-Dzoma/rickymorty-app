import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { Ul } from './Reviews.styled';
import { PageHeading } from 'components/PageHeading/PageHeading';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieAPI.fetchReviews(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      {reviews ? (
        <Ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </Ul>
      ) : (
        <p>There are no reviews yet</p>
      )}
    </>
  );
};

export default Reviews;
