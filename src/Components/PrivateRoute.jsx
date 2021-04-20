import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

// Если маршрут приватный и юзер залогинен, рендерим компонент
// Если нет - то делаем редирект на страницу логина

const PrivateRoute = ({ children, ...routeProps }) => {
  const IsAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {IsAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
