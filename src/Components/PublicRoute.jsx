import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

// Если маршрут ограниченный (логин, регистрация) и юзер залогинен, то редирект на тел книгу
// Иначе рендерит компонент

const PublicRoute = ({ children, ...routeProps }) => {
  const IsAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {IsAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
