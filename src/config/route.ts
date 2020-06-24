import { MyPage } from '../components/MyPage';
import { NoMatch } from '../components/NoMatch';

type Props = {
  path?: string | string[];
  exact?: boolean;
  component: () => JSX.Element;
};

export const routes: Props[] = [
  {
    path: '/home',
    component: MyPage,
  },
  {
    component: NoMatch,
  },
];
