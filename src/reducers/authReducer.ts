import {
  AUTH_CHECK,
  AUTH_PROCESSING_FINISH,
  AUTH_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGOUT,
  AuthState,
  AuthActionTypes,
} from '../types/auth';

const initialState: AuthState = {
  signupError: null,
  loginError: null,
  loading: false,
  loggedIn: false,
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_CHECK:
      return {
        ...state,
        loading: true,
      };
    case AUTH_PROCESSING_FINISH:
      return {
        ...state,
        loading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
        signupError: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupError: action.payload,
      };
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        loginError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
