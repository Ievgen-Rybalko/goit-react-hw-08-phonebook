//import { useEffect, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactList/Filter';
import Section from './components/Section/Section';

import './App.css';

function App() {
  return (
    <div className="App">
      <Section title="Phonebook">
        <ContactForm
        //onFormSubmit={formSubmitHandler}
        //onNewContactAdd={addNewContact}
        />
      </Section>

      <Section title="Contacts">
        <Filter message="Find contacts by name" />

        <ContactList />
      </Section>
    </div>
  );
}

export default App;
