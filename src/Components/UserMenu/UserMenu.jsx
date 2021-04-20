import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import Avatar from '@material-ui/core/Avatar';
import { Button } from 'react-bootstrap';

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <div className={s.user_menu}>
      <div className={s.user_profile}>
        <Avatar src="/broken-image.jpg" />
        <p className={s.text}>Welcome, {name}</p>
      </div>
      <Button
        type="button"
        variant="dark"
        onClick={onLogout}
        className={s.logout_btn}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
