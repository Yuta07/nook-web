import { Project } from '../components/Project';
import { NoMatch } from '../components/NoMatch';

type Props = {
  path?: string | string[];
  exact?: boolean;
  component: () => JSX.Element;
};

export const routes: Props[] = [
  {
    path: '/:username/home',
    component: Project,
  },
  {
    path: '/:username/note',
    exact: true,
    component: Project,
  },
  {
    path: '/:username/task',
    component: Project,
  },
  {
    path: '/:username/calendar',
    component: Project,
  },
  {
    component: NoMatch,
  },
];
