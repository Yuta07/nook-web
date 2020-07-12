import {
  SWITCH_MODAL_STATUS,
  CREATE_TOAST,
  SHOW_TOAST,
  HIDE_TOAST,
  ToastProps,
  createOriginalToast,
  UiActionTypes,
} from '../types/ui';

export const switchModalStatus = (type: 'signup' | 'login'): UiActionTypes => ({
  type: SWITCH_MODAL_STATUS,
  payload: type,
});

export const createNewToast = (): UiActionTypes => ({
  type: CREATE_TOAST,
  payload: {
    id: createOriginalToast(),
    timestamp: Date.now(),
  },
});

export const showToast = (toast: ToastProps): UiActionTypes => ({
  type: SHOW_TOAST,
  toast,
});

export const hideToast = (id: number): UiActionTypes => ({
  type: HIDE_TOAST,
  id,
});
