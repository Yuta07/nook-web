export type ToastProps = {
  id: number;
  status: string;
  text: string[];
  timestamp: number;
};

export type CreateToastProps = Pick<ToastProps, 'id' | 'timestamp'>;
export type ToastStatusProps = Pick<ToastProps, 'status' | 'text'>;

export type ToastState = {
  toasts: ToastProps[];
};

export const CREATE_TOAST = 'CREATE_TOAST';
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

let id = 0;

export function createOriginalToast() {
  return id++;
}

export type CreateToast = {
  type: typeof CREATE_TOAST;
  payload: CreateToastProps;
};

export type ShowToast = {
  type: typeof SHOW_TOAST;
  toast: ToastProps;
};

export type HideToast = {
  type: typeof HIDE_TOAST;
  id: ToastProps['id'];
};

export type ToastActionTypes = CreateToast | ShowToast | HideToast;
