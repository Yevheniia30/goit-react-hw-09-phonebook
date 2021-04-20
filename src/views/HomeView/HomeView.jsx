import s from './HomeView.module.css';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const HomeView = () => {
  const IsAuthenticated = useSelector(getIsAuthenticated);
  return (
    <div className={s.home_page}>
      {IsAuthenticated ? (
        <h1>My Homepage</h1>
      ) : (
        <h1>Welcome! Please register or login to your account</h1>
      )}
    </div>
  );
};

export default HomeView;
