import { Link } from './InnerNavigator.styled';

const InnerNavigator = () => {
  return (
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  );
};

export default InnerNavigator;
