import { Outlet } from 'react-router-dom';
import { Link } from './InnerNavigator.styled';

const InnerNavigator = () => {
  return (
    <>
      <ul>
        <ul></ul>
        <h3>Additional informtion</h3>

        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Location</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default InnerNavigator;
