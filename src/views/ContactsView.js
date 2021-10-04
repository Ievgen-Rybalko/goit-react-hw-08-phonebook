//import { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

import { Alert } from 'antd';
import 'antd/dist/antd.css';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/ContactList/Filter';
import Section from '../components/Section/Section';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

//import { todosOperations, todosSelectors } from '../redux/todos';

const styles = {
  error: {
    textAlign: 'left',
  },
};

export default function ContactsView() {
  //const dispatch = useDispatch();
  //const isLoading = useSelector(Selectors.getLoading);

  // useEffect(() => dispatch(todosOperations.fetchCurrentUser()), [dispatch]);
  const isLoadingToken = useSelector(authSelectors.getIsLoadingToken);
  const errorAuth = useSelector(authSelectors.getErrorAuth);

  //console.log('isLoading', isLoadingToken);

  return (
    <>
      {!isLoadingToken && (
        <>
          <Section title="Phonebook">
            <ContactForm />
          </Section>
          <Section title="Contacts">
            <Filter message="Find contacts by name" />
            {/* {isLoading && <h1>Loading contacts...</h1>} */}
            <ContactList />
          </Section>{' '}
        </>
      )}
      {errorAuth && (
        <div style={styles.error}>
          <Alert
            message="Error"
            description={`Some thing went wrong! Please, try again! \n ${errorAuth}`}
            type="error"
            showIcon
          />{' '}
        </div>
      )}
    </>
  );
}
