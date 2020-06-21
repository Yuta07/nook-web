export type User = {
  name: string;
  password: string;
};

export type AuthState = {
  signupError?: string;
  loginError?: string;
  loading: boolean;
  loggedIn: boolean;
};

export type LoggedIn = Pick<AuthState, 'loggedIn'>;

export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_PROCESSING_FINISH = 'AUTH_PROCESSING_FINISH';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

interface InitialAuthCheck {
  type: typeof AUTH_CHECK;
}

interface AuthProcessingFinish {
  type: typeof AUTH_PROCESSING_FINISH;
}

interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
}

interface SignupStart {
  type: typeof SIGNUP_START;
  payload: User;
}

interface SignupFailure {
  type: typeof SIGNUP_FAILURE;
  payload: AuthState['signupError'];
}

interface LoginStart {
  type: typeof LOGIN_START;
  payload: User;
}

interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: AuthState['loginError'];
}

interface Logout {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | InitialAuthCheck
  | AuthProcessingFinish
  | AuthSuccess
  | SignupStart
  | SignupFailure
  | LoginStart
  | LoginFailure
  | Logout;
