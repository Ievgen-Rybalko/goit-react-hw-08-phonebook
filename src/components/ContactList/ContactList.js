import ContactItem from './ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLoading, getError } from '../../redux/contacts/contact-selectors';
import {
  getContactsTotal,
  getContactsFiltered,
} from '../../redux/contacts/contact-selectors';

import styles from './ContactList.module.css';
import { fetchAllContacts } from '../../redux/contacts/contact-operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsFiltered = useSelector(getContactsFiltered);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => dispatch(fetchAllContacts()), [dispatch]);

  return (
    <>
      {error && <h2>Error on contacts fetching: {error.message}</h2>}
      {loading ? (
        <h3 className={styles.title}>Loading contacts...</h3>
      ) : (
        <h3 className={styles.title}>Contact list: </h3>
      )}
      <ul>
        {contactsFiltered.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
      <span style={{ color: 'white', fontSize: '16px' }}>
        Total contacts: {useSelector(getContactsTotal)}
      </span>{' '}
    </>
  );
};

export default ContactList;
