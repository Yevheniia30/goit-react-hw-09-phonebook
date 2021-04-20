import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';
import { Switch, Route } from 'react-router-dom';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomePage" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginPage" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterPage" */),
);
const PhoneBookView = lazy(() =>
  import('./views/PhoneBookView' /* webpackChunkName: "ContactsPage" */),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect instead componentDidMount');
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.App}>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#424141"
            height={60}
            width={60}
            timeout={3000}
          />
        }
      >
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <PhoneBookView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
