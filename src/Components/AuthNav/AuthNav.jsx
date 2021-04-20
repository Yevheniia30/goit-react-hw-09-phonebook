import { NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

const AuthNav = () => {
  return (
    <Nav>
      <Button variant="dark">
        <NavLink to="/login">Login</NavLink>
      </Button>
      <Button variant="dark">
        <NavLink to="/register">Sign up</NavLink>
      </Button>
    </Nav>
  );
};

export default AuthNav;
