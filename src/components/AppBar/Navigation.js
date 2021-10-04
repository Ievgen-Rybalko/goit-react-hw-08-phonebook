import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
    marginLeft: '15px',
  },
  activeLink: {
    color: '#1a5ef3ec',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
