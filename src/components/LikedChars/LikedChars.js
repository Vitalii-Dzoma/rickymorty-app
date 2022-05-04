import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { Ul } from './Reviews.styled';
import toast from 'react-hot-toast';
import { HowManyCharactersWereLiked } from 'components/HowManyCharactersWereLiked/HowMany';

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
        <HowManyCharactersWereLiked />
        {review && (
          <Ul>
            <li key={review.id}>
              Location
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
