import axios from 'axios';
import config from './config';

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json',
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      deleteAuthToken();
    }
    return error.response;
  }
);

export function updateAuthToken(token: string) {
  instance.defaults.headers.common['Authorization'] = token;
  localStorage.setItem('access_token', token);
}

export function deleteAuthToken() {
  instance.defaults.headers.common['Authorization'] = '';
  localStorage.clear();
}

export default instance;
