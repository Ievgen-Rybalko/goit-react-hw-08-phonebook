import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  //console.log('styles,: ', styles);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
