import React, { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import { InnerNavigator } from './InnerNavigator/InnerNavigator';
// import MoviePage from './MoviePage/MoviePage';
// import MoviePageView from './MoviePage/MoviePageView/MoviePageView';
// import HomePage from './HomePage/HomePage';
const InnerNavigator = lazy(() => import('./InnerNavigator/InnerNavigator'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviePage = lazy(() => import('./MoviePage/MoviePage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));
const MoviePageView = lazy(() =>
  import('./MoviePage/MoviePageView/MoviePageView')
);
const TrendingHomeView = lazy(() =>
  import('../views/TrendingHomeViews/TrendingHomeView')
);
export const App = () => {
  const navigate = useNavigate();
  const goBackBtn = () => {
    navigate(-1, { replace: true });
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<TrendingHomeView />} />
          <Route path="movies" element={<MoviePage goBack={goBackBtn} />} />
          <Route
            path=":movieId/"
            element={<MoviePageView goBack={goBackBtn} />}
          >
            <Route path=":movieId" element={<InnerNavigator />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
