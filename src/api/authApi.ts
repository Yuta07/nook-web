import instance, { AxiosPromise } from '../config/axios';
import { User } from '../types/auth';

export const authApi = {
  signup: async (user: User): Promise<AxiosPromise<void>> => {
    const { username, password } = user;
    const response = await instance.post('/users/signup', { username, password });
    const { data, status } = response;
    return { data, status };
  },
  login: async (user: User): Promise<AxiosPromise<void>> => {
    const { username, password } = user;
    const response = await instance.post('/users/login', { username, password });
    const { data, status } = response;
    return { data, status };
  },
  auto_login: async () => {
    const response = await instance.get('/users/auth', {});
    const { data } = response;
    return { data };
  },
  logout: async () => {
    const response = await instance.post('/users/logout', {});
    const { status } = response;
    return { status };
  },
};
