import actions from './contact-actions';
import axios from 'axios';

// axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

console.log('axiosthorization :', axios.defaults.headers.common.Authorization);
console.log('axios.defaults.baseURL :', axios.defaults.baseURL);

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
} = actions;

export const fetchAllContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = (contacts, name, number) => dispatch => {
  const isNew = contacts.some(contact => contact.name === name);
  if (isNew) {
    alert(`${name} is already in contacts`);
    return;
  }
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

export const updateContact = (id, number) => dispatch => {
  dispatch(updateContactRequest());
  axios
    .patch(`/contacts/${id}`, { number })
    .then(({ data }) => dispatch(updateContactSuccess(data)))
    .catch(error => dispatch(updateContactError(error.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};
