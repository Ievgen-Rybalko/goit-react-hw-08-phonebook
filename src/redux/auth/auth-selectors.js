const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsLoadingToken = state => state.auth.isLoadingToken;

const getErrorAuth = state => state.auth.errorAuth;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsLoadingToken,
  getErrorAuth,
};

export default authSelectors;
