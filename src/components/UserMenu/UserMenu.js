import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import actions from '../../redux/contacts/contact-actions';
//import { fetchAllContacts } from '../../redux/contacts/contact-operations';
//import { getContacts } from '../../redux/contacts/contact-selectors';
import defaultAvatar from './default.jpg';

import { Button } from 'antd';
import 'antd/dist/antd.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '35px',
    marginRight: '35px',
  },
  avatar: {
    marginRight: 4,
    borderRadius: '50%',
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
    //console.log('before disp logout');
    dispatch(authOperations.logOut());
    //console.log('after disp logout');
    dispatch(actions.contactsClear());
  };

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button
        type="primary"
        shape="default"
        size={'small'}
        htmlType="button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
