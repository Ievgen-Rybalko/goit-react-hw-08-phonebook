//import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
//import types from './contact-types';

//const addContact = createAction(types.ADD,)

const fetchContactRequest = createAction('contact/fetchContactRequest');
const fetchContactSuccess = createAction('contact/fetchContactSuccess');
const fetchContactError = createAction('contact/fetchContactError');

const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const updateContactRequest = createAction('contact/updateContactRequest');
const updateContactSuccess = createAction('contact/updateContactSuccess');
const updateContactError = createAction('contact/updateContactError');

const deleteContactRequest = createAction('contact/deleteContactRequest');
const deleteContactSuccess = createAction('contact/deleteContactSuccess');
const deleteContactError = createAction('contact/deleteContactError');

const changeFilter = createAction('contact/changeFilter');

const contactsClear = createAction('contacts/clear');

const contactActions = {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  contactsClear,
};

export default contactActions;

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = text => ({
//     type: types.CHANGE_FILTER,
//     payload: text,
// });
