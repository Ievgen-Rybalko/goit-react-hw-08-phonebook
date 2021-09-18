import actions from './contact-actions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

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
} = actions;

/////////\\\\\\\\ for updete feature
// const {
//     updateContactRequest,
//     updateContactSuccess,
//     updateContactError } = actions;

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
    .catch(error => dispatch(addContactError(error)));
};

// export const updateContact = (id, number) => dispatch => {
//     const update = { number };
//     dispatch(updateContactRequest());
//     axios.patch(`/contacts/${id}`, update)
//         .then(({ data }) => dispatch(updateContactSuccess(data)))
//         .catch (error => dispatch(updateContactError(error)));
// };

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
