import instance from '../config/axios';
import { User } from '../types/auth';

export const authApi = {
  signup: (user: User) => {
    return instance.post('/users', {
      user: { name: user.name, password: user.password },
    });
  },
  login: (user: User) => {
    return instance.post('/sessions/login', {
      user: { name: user.name, password: user.password },
    });
  },
  logout: () => {
    return instance.post('/sessions/logout');
  },
};
