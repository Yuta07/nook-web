import {
  AUTH_CHECK,
  AUTH_PROCESSING_FINISH,
  AUTH_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_FINISH,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_FINISH,
  LOGOUT,
  AuthState,
  AuthActionTypes,
} from '../types/auth';

const initialState: AuthState = {
  username: null,
  signup: {
    errors: null,
    loading: false,
  },
  login: {
    errors: null,
    loading: false,
  },
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
        username: action.payload,
        loggedIn: true,
      };
    case SIGNUP_START:
      return {
        ...state,
        signup: { ...state.signup, loading: true },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup: { ...state.signup, errors: action.payload.errors },
      };
    case SIGNUP_FINISH:
      return {
        ...state,
        signup: { ...state.signup, loading: false },
      };
    case LOGIN_START:
      return {
        ...state,
        login: { ...state.login, loading: true },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: { ...state.login, errors: action.payload.errors },
      };
    case LOGIN_FINISH:
      return {
        ...state,
        login: { ...state.login, loading: false },
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
