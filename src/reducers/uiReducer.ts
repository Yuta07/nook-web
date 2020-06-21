import { SHOW_TOAST, HIDE_TOAST, ToastProps, ToastState, ToastActionTypes } from '../types/ui';

const initialState: ToastState = {
  toasts: [],
};

export const toastReducer = (state = initialState, action: ToastActionTypes): ToastState => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts],
      };
    case HIDE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast: ToastProps) => toast.id !== action.id),
      };
    default:
      return state;
  }
};
