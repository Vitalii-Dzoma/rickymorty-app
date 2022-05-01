import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { Ul } from './Reviews.styled';
import toast from 'react-hot-toast';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReviews] = useState(null);

  useEffect(() => {
    movieAPI.fetchAllLocation(movieId).then(setReviews);
    console.log(review);
    if (!review) {
      toast.error('There is no location');
    }
    toast.success('Vuala');
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {review && (
          <Ul>
            <li key={review.id}>
              <h5>{review.name}</h5>
              <p>{review.dimension}</p>
              <span>{review.type}</span>
            </li>
          </Ul>
        )}
      </Suspense>
    </>
  );
};

export default Reviews;
