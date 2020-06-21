import { delay, put } from 'redux-saga/effects';
import { ToastStatusProps } from '../types/ui';
import { createNewToast, showToast, hideToast } from '../actions/uiAction';

export function* createToast({ status, text }: ToastStatusProps) {
  const { payload } = yield put(createNewToast());
  const newToast = Object.assign({ status, text }, payload);
  yield put(showToast(newToast));
  yield delay(7000);
  yield put(hideToast(newToast.id));
}
