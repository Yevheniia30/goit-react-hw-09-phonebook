import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { Navbar } from 'react-bootstrap';
import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const AppBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={s.navbar}
    >
      <Navbar.Brand className={s.navbar_brand}>Phonebook</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;
