import { combineReducers } from 'redux';
//import types from './contacts/contact-types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';
const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  changeFilter,
  contactsClear,
} = actions;
// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => {
    return payload;
  },
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [updateContactSuccess]: (state, { payload }) =>
    state.map(contact =>
      contact.id === payload.id
        ? { ...contact, number: payload.number }
        : contact,
    ),
  [deleteContactSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
  [contactsClear]: state => {
    //console.log('очищаю контакты только в стейте');
    state = [];
    return state;
  },
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [updateContactRequest]: () => true,
  [updateContactSuccess]: () => false,
  [updateContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [updateContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,

  [fetchContactRequest]: () => null,
  [addContactRequest]: () => null,
  [updateContactRequest]: () => null,
  [deleteContactRequest]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  loading,
  error,
  filter,
});
