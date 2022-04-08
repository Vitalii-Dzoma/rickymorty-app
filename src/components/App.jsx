import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import MoviePage from './MoviePage/MoviePage';
// import MoviePageView from './MoviePage/MoviePageView/MoviePageView';
// import HomePage from './HomePage/HomePage';
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviePage = lazy(() => import('./MoviePage/MoviePage'));

const MoviePageView = lazy(() =>
  import('./MoviePage/MoviePageView/MoviePageView')
);
const TrendingHomeView = lazy(() =>
  import('../views/TrendingHomeViews/TrendingHomeView')
);
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<TrendingHomeView />} />
          <Route path="movies" element={<MoviePage />}>
            <Route path=":movieId" element={<MoviePageView />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
