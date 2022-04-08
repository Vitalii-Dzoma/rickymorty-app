import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as movieApi from '../../services/movie-api';

const MoviePage = () => {
  return (
    <>
      <h2>Загружаем...</h2>
      <Outlet />
      {/* {movie && (
        <>
          <h2>{movie.name}</h2>
          <ul>
            {movie.map(details => (
              <li key={details.id}>
                <Link to={`/movies/${details.id}`}>{details.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )} */}
    </>
  );
};

export default MoviePage;
