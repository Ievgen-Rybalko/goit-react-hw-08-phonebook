import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contact-operations';
import { useState } from 'react';
import { updateContact } from '../../redux/contacts/contact-operations'; // for update feature

import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isUpdating = false, setIsUpdating] = useState();
  const [newNumber = number, setNewNumber] = useState();

  const handleChange = ({ target: { value } }) => {
    return setNewNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact(id, newNumber));
    setNewNumber(newNumber);
    setIsUpdating(false);
  };

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

      <button
        type="button"
        className={styles.button__delete}
        onClick={() => setIsUpdating(true)}
      >
        Обновить
      </button>

      {isUpdating && (
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            <input type="text" value={newNumber} onChange={handleChange} />
          </label>

          <button type="submit">Update!</button>
        </form>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
