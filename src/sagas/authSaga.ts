import { call, cancelled, fork, put, take, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  authProcessingFinish,
  authSuccess,
  signupFailure,
  signupFinish,
  loginFailure,
  loginFinish,
  logout,
} from '../actions/authAction';
import { authApi } from '../api/authApi';
import { updateAuthToken, deleteAuthToken } from '../config/axios';
import { createToast } from '../sagas/uiSaga';
import { AUTH_CHECK, SIGNUP_START, LOGIN_START, LOGOUT, User } from '../types/auth';

function* checkAuthState() {
  let access_token: string | undefined = yield localStorage.getItem('access_token');
  if (access_token) {
    updateAuthToken(access_token);
    const { data } = yield call(authApi.auto_login);
    if (data) {
      const { username } = data;
      yield put(authSuccess(username));
      yield put(push(`/${username}/home`));
      yield fork(createToast, { status: 'success', text: ['Welcome to nook.'] });
    } else {
      deleteAuthToken();
      yield put(push('/'));
    }
  } else {
    deleteAuthToken();
    yield put(push('/'));
  }
  yield put(authProcessingFinish());
}

function* signup(auth: User) {
  try {
    const { data, status } = yield call(authApi.signup, auth);
    if (status === 201) {
      const { token, user } = data;
      updateAuthToken(token);
      yield put(authSuccess(user.username));
      yield put(push(`/${user.username}/home`));
      yield fork(createToast, { status: 'success', text: ['Welcome to nook.'] });
    } else {
      yield put(signupFailure({ errors: data.error || ['Signup Failure.'] }));
    }
  } catch {
    yield put(signupFailure({ errors: ['Signup Failure.'] }));
  } finally {
    if (yield cancelled()) {
      yield put(signupFailure({ errors: ['Signup Failure.'] }));
    }
    yield put(signupFinish());
  }
}

function* login(auth: User) {
  try {
    const { data, status } = yield call(authApi.login, auth);
    if (status === 200) {
      const { token, user } = data;
      updateAuthToken(token);
      yield put(authSuccess(user.username));
      yield put(push(`/${user.username}/home`));
      yield fork(createToast, { status: 'success', text: ['Login Succeeded.'] });
    } else {
      yield put(loginFailure({ errors: data.error || ['Login Failure.'] }));
    }
  } catch {
    yield put(loginFailure({ errors: ['Login Failure.'] }));
  } finally {
    if (yield cancelled()) {
      yield put(loginFailure({ errors: ['Login Failure.'] }));
    }
    yield put(loginFinish());
  }
}

function* logoutAction() {
  while (true) {
    yield take(LOGOUT);
    try {
      const { status } = yield call(authApi.logout);
      if (status === 200) {
        deleteAuthToken();
        yield put(logout());
        yield put(push('/'));
        yield fork(createToast, { status: 'success', text: ['ログアウトしました。'] });
      }
    } catch {
      yield fork(createToast, {
        status: 'failure',
        text: ['不具合が発生しました。時間をおいて再操作してください。'],
      });
    }
  }
}

function* signupStart() {
  while (true) {
    const actions = yield take(SIGNUP_START);
    const auth = actions.payload;
    yield fork(signup, auth);
  }
}

function* loginStart() {
  while (true) {
    const actions = yield take(LOGIN_START);
    const auth = actions.payload;
    yield fork(login, auth);
  }
}

export default function* authSaga() {
  yield takeEvery(AUTH_CHECK, checkAuthState);
  yield fork(signupStart);
  yield fork(loginStart);
  yield fork(logoutAction);
}
