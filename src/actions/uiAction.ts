import { CREATE_TOAST, SHOW_TOAST, HIDE_TOAST, ToastProps, createOriginalToast, ToastActionTypes } from '../types/ui';

export const createNewToast = (): ToastActionTypes => ({
  type: CREATE_TOAST,
  payload: {
    id: createOriginalToast(),
    timestamp: Date.now(),
  },
});

export const showToast = (toast: ToastProps): ToastActionTypes => ({
  type: SHOW_TOAST,
  toast,
});

export const hideToast = (id: number): ToastActionTypes => ({
  type: HIDE_TOAST,
  id,
});
