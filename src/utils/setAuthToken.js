import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
  //  set global header if there is token in localstorage
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
  // if what is passed in is not a token, delete it
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
