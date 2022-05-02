import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './../redux/storage';
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
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const navigate = useNavigate();

  const responseFacebook = response => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const goBackBtn = () => {
    navigate(-1, { replace: true });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div class="container">
            <Card style={{ width: '600px' }}>
              <Card.Header>
                {!login && (
                  <FacebookLogin
                    appId="382321387140432"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook"
                  />
                )}
                {login && <Image src={picture} roundedCircle />}
              </Card.Header>
              {login && (
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.email}</Card.Text>
                </Card.Body>
              )}
              {login && (
                <Routes>
                  <Route path="/" element={<HomePage />}>
                    <Route index element={<TrendingHomeView />} />
                    <Route path="characters" element={<MoviePage />} />
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
              )}
            </Card>
          </div>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};
