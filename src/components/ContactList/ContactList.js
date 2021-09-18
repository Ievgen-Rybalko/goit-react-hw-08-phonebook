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
    <div>
      {loading && <h2>Loading contacts...</h2>}
      {error && <h2>Error on contacts fetching: {error.message}</h2>}
      <p className={styles.title}>
        Contact list.{' '}
        <span style={{ color: 'white', fontSize: '16px' }}>
          Total contacts {useSelector(getContactsTotal)}
        </span>{' '}
        :
      </p>
      <ul>
        {contactsFiltered.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
