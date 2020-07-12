export type User = {
  username: string;
  password: string;
};

type FormState = {
  errors?: string[];
  loading: boolean;
};

export type AuthState = {
  username: User['username'];
  signup?: FormState;
  login?: FormState;
  loading: boolean;
  loggedIn: boolean;
};

export type LoggedIn = Pick<AuthState, 'loggedIn'>;

export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_PROCESSING_FINISH = 'AUTH_PROCESSING_FINISH';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_FINISH = 'SIGNUP_FINISH';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_FINISH = 'LOGIN_FINISH';
export const LOGOUT = 'LOGOUT';

type InitialAuthCheck = {
  type: typeof AUTH_CHECK;
};

type AuthProcessingFinish = {
  type: typeof AUTH_PROCESSING_FINISH;
};

type AuthSuccess = {
  type: typeof AUTH_SUCCESS;
  payload: AuthState['username'];
};

type SignupStart = {
  type: typeof SIGNUP_START;
  payload: User;
};

type SignupFailure = {
  type: typeof SIGNUP_FAILURE;
  payload: Pick<AuthState['signup'], 'errors'>;
};

type SignupFinish = {
  type: typeof SIGNUP_FINISH;
};

type LoginStart = {
  type: typeof LOGIN_START;
  payload: User;
};

type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: Pick<AuthState['login'], 'errors'>;
};

type LoginFinish = {
  type: typeof LOGIN_FINISH;
};

type Logout = {
  type: typeof LOGOUT;
};

export type AuthActionTypes =
  | InitialAuthCheck
  | AuthProcessingFinish
  | AuthSuccess
  | SignupStart
  | SignupFailure
  | SignupFinish
  | LoginStart
  | LoginFailure
  | LoginFinish
  | Logout;
