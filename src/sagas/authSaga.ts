import { call, cancelled, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { authProcessingFinish, authSuccess, signupFailure, loginFailure, logout } from '../actions/authAction';
import { authApi } from '../api/authApi';
import { updateAuthToken, deleteAuthToken } from '../config/axios';
import { createToast } from '../sagas/uiSaga';
import { AUTH_CHECK, SIGNUP_START, LOGIN_START, LOGOUT, User } from '../types/auth';

function* checkAuthState() {
  let access_token: string | undefined = yield localStorage.getItem('access_token');
  if (access_token) {
    yield put(authSuccess());
    yield put(push('/home'));
  } else {
    deleteAuthToken();
    yield put(push('/'));
  }
  yield put(authProcessingFinish());
}

function* signup(auth: User) {
  try {
    const { data, status } = yield call(authApi.signup, auth);
    if (status === 200 && data) {
      updateAuthToken(data.auth_token);
      yield put(authSuccess());
      yield put(push('/home'));
      yield fork(createToast, { status: 'success', text: ['Welcome to nook.'] });
    } else {
      yield put(signupFailure('登録に失敗しました。'));
      yield fork(createToast, { status: 'failure', text: data.messages });
    }
  } catch (error) {
    yield put(signupFailure(error));
    yield fork(createToast, { status: 'failure', text: ['Signup Failure.'] });
  } finally {
    if (yield cancelled()) {
      yield fork(createToast, { status: 'failure', text: ['Signup Failure.'] });
    }
    yield put(authProcessingFinish());
  }
}

function* login(auth: User) {
  try {
    const { data, status } = yield call(authApi.login, auth);
    if (status === 200) {
      updateAuthToken(data.auth_token);
      yield put(authSuccess());
      yield put(push('/home'));
      yield fork(createToast, { status: 'success', text: ['Login Succeeded.'] });
    } else {
      yield put(loginFailure('ログインに失敗しました。'));
      yield fork(createToast, { status: 'failure', text: ['Login Failure.'] });
    }
  } catch (error) {
    yield put(loginFailure(error));
    yield fork(createToast, { status: 'failure', text: ['Login Failure.'] });
  } finally {
    if (yield cancelled()) {
      yield fork(createToast, { status: 'failure', text: ['Login Failure.'] });
    }
    yield put(authProcessingFinish());
  }
}

function* logoutAction() {
  try {
    const { status } = yield call(authApi.logout);
    if (status === 200) {
      deleteAuthToken();
      yield put(logout());
      yield put(push('/'));
      yield fork(createToast, { status: 'success', text: ['ログアウトしました。'] });
    }
  } catch (error) {
    yield fork(createToast, {
      status: 'failure',
      text: ['不具合が発生しました。時間をおいて再操作してください。'],
    });
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
  yield takeLatest(LOGOUT, logoutAction);
}
