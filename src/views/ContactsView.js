//import { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/ContactList/Filter';
import Section from '../components/Section/Section';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

//import { todosOperations, todosSelectors } from '../redux/todos';

export default function ContactsView() {
  //const dispatch = useDispatch();
  //const isLoading = useSelector(Selectors.getLoading);

  // useEffect(() => dispatch(todosOperations.fetchCurrentUser()), [dispatch]);
  const isLoadingToken = useSelector(authSelectors.getIsLoadingToken);
  console.log('isLoading', isLoadingToken);

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
    </>
  );
}
