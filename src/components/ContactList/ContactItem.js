import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contact-operations';
//import { updateContact } from '../../redux/contacts/contact-operations';   // for update feature
import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactlist__item}>
      <p>
        {name}, {number}
      </p>
      <button
        type="button"
        className={styles.button__delete}
        onClick={() => dispatch(deleteContact(id))}
      >
        Удалить
      </button>

      {/* <button
        type="button"
        className={styles.button__delete}
        onClick={() => dispatch(updateContact(id, number))}
      >
        Обновить
      </button> */}
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
