import axios from 'axios';
// import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
} from './types';

// Get current user's profile
const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        status: error.response.status,
        msg: error.response.statusText,
      },
    });
  }
};

export default getCurrentProfile;
