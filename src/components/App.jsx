import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { InnerNavigator } from './InnerNavigator/InnerNavigator';
// import MoviePage from './MoviePage/MoviePage';
// import MoviePageView from './MoviePage/MoviePageView/MoviePageView';
// import HomePage from './HomePage/HomePage';
const InnerNavigator = lazy(() => import('./InnerNavigator/InnerNavigator'));
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
            <Route path=":movieId" element={<MoviePageView />}>
              <Route index element={<InnerNavigator />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
