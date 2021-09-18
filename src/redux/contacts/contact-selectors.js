import { createSelector } from '@reduxjs/toolkit';

export const getContactsTotal = state => state.contacts.items.length;

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getContactsFiltered = createSelector(
  [getContacts, getFilter],
  (items, filter) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export const getLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error;
