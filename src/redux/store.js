//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
//import { composeWithDevTools } from 'redux-devtools-extension';   ---у тулкита под капотом
import { authReducer } from './auth';
import contactsReducer from './contacts/contact-reducer';
import { logger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(userPersistConfig, authReducer),

    contacts: contactsReducer,
  },
  midleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development', //devTools: true -- it goes by default
});
const persistor = persistStore(store);

const persStore = { store, persistor };

export default persStore;
