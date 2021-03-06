import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contact-operations';
import { useState } from 'react';
import { updateContact } from '../../redux/contacts/contact-operations'; // for update feature

import styles from './ContactList.module.css';

import 'antd/dist/antd.css';
//import './index.css';
import { Button } from 'antd';

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
      {isUpdating ? (
        <>
          <span>{name},</span>
          <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
            <label style={styles.label}>
              <input type="text" value={newNumber} onChange={handleChange} />
            </label>

            <span className={styles.Button}>
              <Button
                type="primary"
                shape="round"
                size={'small'}
                htmlType="submit"
              >
                Update
              </Button>
            </span>
          </form>
        </>
      ) : (
        <>
          <span>
            {name}, {number}
          </span>
          <span className={styles.Buttons_group}>
            <span className={styles.Button}>
              <Button
                type="primary"
                htmlType="button"
                shape="round"
                size={'small'}
                onClick={() => setIsUpdating(true)}
              >
                Update
              </Button>
            </span>

            <span className={styles.Button}>
              <Button
                type="primary"
                htmlType="button"
                shape="round"
                size={'small'}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </span>
          </span>
        </>
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
