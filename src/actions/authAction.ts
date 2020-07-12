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

export function authSuccess(username: AuthState['username']): AuthActionTypes {
  return {
    type: AUTH_SUCCESS,
    payload: username,
  };
}

export function signupStart(user: User): AuthActionTypes {
  return {
    type: SIGNUP_START,
    payload: user,
  };
}

export function signupFailure(errors: Pick<AuthState['signup'], 'errors'>): AuthActionTypes {
  return {
    type: SIGNUP_FAILURE,
    payload: errors,
  };
}

export function signupFinish(): AuthActionTypes {
  return {
    type: SIGNUP_FINISH,
  };
}

export function loginStart(user: User): AuthActionTypes {
  return {
    type: LOGIN_START,
    payload: user,
  };
}

export function loginFailure(errors: Pick<AuthState['login'], 'errors'>): AuthActionTypes {
  return {
    type: LOGIN_FAILURE,
    payload: errors,
  };
}

export function loginFinish(): AuthActionTypes {
  return {
    type: LOGIN_FINISH,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
