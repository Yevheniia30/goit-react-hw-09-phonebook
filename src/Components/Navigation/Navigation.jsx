import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { Nav } from 'react-bootstrap';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const IsAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Nav className=" mr-auto ">
      <NavLink exact to="/" className={s.link}>
        Home
      </NavLink>

      {IsAuthenticated && (
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      )}
    </Nav>
  );
};

export default Navigation;
