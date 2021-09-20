import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import actions from '../../redux/contacts/contact-actions';
//import { fetchAllContacts } from '../../redux/contacts/contact-operations';
//import { getContacts } from '../../redux/contacts/contact-selectors';
import defaultAvatar from './default.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  //const contactItems = useSelector(getContacts);

  const handleLogout = () => {
    console.log('before disp logout');
    dispatch(authOperations.logOut());
    console.log('after disp logout');
    dispatch(actions.contactsClear());
  };

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}
