import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviePage/MoviePage'));
const TrendingHomeView = lazy(() =>
  import('../views/TrendingHomeViews/TrendingHomeView')
);
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<TrendingHomeView />} />
          <Route path="movies" element={<MoviesPage />} />
          {/* <Route path="movies" element={<MoviesPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
