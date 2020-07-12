import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from './config';

export interface AxiosResponseError {
  error: string[];
}

export interface AxiosPromise<T> {
  data: T;
  status: number;
  statusText?: string;
}

const instance: AxiosInstance = axios.create({
  baseURL: config.baseURL,
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return convertStatusErrorMessage(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    return convertStatusErrorMessage(error);
  }
);

export function convertStatusErrorMessage(error: any) {
  if (error.response.status === 401) {
    deleteAuthToken();
  }
  return error.response;
}

export function updateAuthToken(token: string) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('access_token', token);
}

export function deleteAuthToken() {
  instance.defaults.headers.common['Authorization'] = '';
  localStorage.clear();
}

export default instance;
