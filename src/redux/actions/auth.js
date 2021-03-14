import axios from 'axios';
import { Redirect } from 'react-router-dom';

import setAlert from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  CLEAR_PROFILE,
  RESET_SUCCESS,
  RESET_FAIL,
  NEW_PASSWORD_FAIL,
  NEW_PASSWORD_SUCCESS,
} from './types';

// Global header
import setAuthToken from '../../utils/setAuthToken';

// Load user
const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    await dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user action
const register = ({
  username, email, role, password,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',

    },

  };
  const body = JSON.stringify({
    username, email, role, password,
  });

  try {
    const res = await axios.post('/api/user', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // So user is loaded immediately
    dispatch(loadUser());
  } catch (err) {
    const { errors } = err.response.data;
    console.log('The register error is here: ', errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,

    });
  }
};

// Log in user action
const login = ({
  email, password,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },

  };
  const body = JSON.stringify({
    email, password,
  });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // So user is loaded immediately
    dispatch(loadUser());
  } catch (err) {
    const { errors } = err.response.data;
    console.log('The login error is here: ', errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,

    });
  }
};

// password reset action
const resetPswd = ({
  email,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },

  };
  const body = JSON.stringify({
    email,
  });

  try {
    const res = await axios.post('/api/auth/reset-password', body, config);
    dispatch(setAlert('Check Your Mail', 'success'));
    dispatch({
      type: RESET_SUCCESS,
      payload: res.data,

    });
  } catch (err) {
    const { errors } = err.response.data;
    console.log('The RESET  error is here: ', errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: RESET_FAIL,

    });
  }
};

// NEW PASSWORD
const newPswd = ({
  password, token,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },

  };
  const body = JSON.stringify({
    password,
    token,
  });
  console.log(body.token);

  try {
    const res = await axios.post('/api/auth/new-password', body, config);
    dispatch({
      type: NEW_PASSWORD_SUCCESS,
      payload: res.data,

    });

    dispatch(setAlert('Password Successfully Updated', 'success'));
    <Redirect to="/login" />;
  } catch (err) {
    const { errors } = err.response.data;
    console.log('The new password error is here: ', errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: NEW_PASSWORD_FAIL,

    });
  }
};

//  lOGOUT / ClearProfile

const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOG_OUT });
};

export {
  register, loadUser, login, logout, resetPswd, newPswd,
};
