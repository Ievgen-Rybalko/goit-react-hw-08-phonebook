const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsLoadingToken = state => state.auth.isLoadingToken;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsLoadingToken,
};

export default authSelectors;
