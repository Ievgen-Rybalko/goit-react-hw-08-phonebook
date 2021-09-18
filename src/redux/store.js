//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
//import { composeWithDevTools } from 'redux-devtools-extension';   ---у тулкита под капотом

import contactsReducer from './contacts/contact-reducer';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  midleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development', //devTools: true -- it goes by default
});

export default store;
