import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoadingToken: true,
  errorAuth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingToken = false;
    },
    [authOperations.register.rejected](state, action) {
      state.errorAuth = action.payload;
    },
    [authOperations.register.pending](state, action) {
      state.errorAuth = null;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingToken = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.errorAuth = action.payload;
    },
    [authOperations.logIn.pending](state, action) {
      state.errorAuth = null;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoadingToken = false;
    },
    [authOperations.logOut.rejected](state, action) {
      state.errorAuth = action.payload;
    },
    [authOperations.logOut.pending](state, action) {
      state.errorAuth = null;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoadingToken = true;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoadingToken = false;
    },

    [authOperations.fetchCurrentUser.rejected](state) {
      state.isLoadingToken = false;
    },
  },
});

export default authSlice.reducer;
