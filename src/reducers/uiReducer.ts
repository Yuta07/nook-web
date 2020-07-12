import { SWITCH_MODAL_STATUS, SHOW_TOAST, HIDE_TOAST, ToastProps, UiState, UiActionTypes } from '../types/ui';

const initialState: UiState = {
  modal: {
    signup: false,
    login: false,
  },
  toasts: [],
};

export const uiReducer = (state = initialState, action: UiActionTypes): UiState => {
  switch (action.type) {
    case SWITCH_MODAL_STATUS:
      return {
        ...state,
        modal: {
          ...state.modal,
          [action.payload]: !state.modal[action.payload],
        },
      };
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
