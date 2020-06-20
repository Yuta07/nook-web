import { Home } from '../components/Home';
import { NoMatch } from '../components/NoMatch';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '*',
    component: NoMatch,
  },
];
