import {
  AUTH_CHECK,
  AUTH_PROCESSING_FINISH,
  AUTH_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGOUT,
  User,
  AuthState,
  AuthActionTypes,
} from '../types/auth';

export function initialAuthCheck(): AuthActionTypes {
  return {
    type: AUTH_CHECK,
  };
}

export function authProcessingFinish() {
  return {
    type: AUTH_PROCESSING_FINISH,
  };
}

export function authSuccess() {
  return {
    type: AUTH_SUCCESS,
  };
}

export function signupStart(user: User): AuthActionTypes {
  return {
    type: SIGNUP_START,
    payload: user,
  };
}

export function signupFailure(error: AuthState['signupError']): AuthActionTypes {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
}

export function loginStart(user: User): AuthActionTypes {
  return {
    type: LOGIN_START,
    payload: user,
  };
}

export function loginFailure(error: AuthState['loginError']): AuthActionTypes {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
