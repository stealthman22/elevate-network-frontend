import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  RESET_SUCCESS,
  RESET_FAIL,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL,
} from '../actions/types';

// initial state is the value of token in local storage
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function registerFunc(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case RESET_SUCCESS:
    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,

      };

    case RESET_FAIL:
    case NEW_PASSWORD_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,

      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOG_OUT:
    case CLEAR_PROFILE:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
