import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { NoMatch } from './components/NoMatch';
import { routes } from './config/route';
import { Layout } from './hoc/Layout';
import { useTheme } from './hooks/useTheme';
import { GlobalStyle } from './themes/Global';
import { ThemeProvider } from './themes/ThemeProvider';
import { AuthState, AUTH_CHECK } from './types/auth';
import { SpinnerWithMessage } from './ui/atoms/Spinner';

const body = document.querySelector('body');
const mode: 'light' | 'dark' = JSON.parse(localStorage.getItem('theme'));
const initialMode = (loggedIn: boolean) => {
  if (loggedIn) {
    return mode === 'light' ? 'light' : 'dark';
  } else {
    return 'light';
  }
};

export const App = () => {
  const dispatch = useDispatch();
  const { loading, loggedIn }: AuthState = useSelector((state) => state['auth']);

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode(loggedIn));
  const themes = useTheme();
  const { palette } = themes;

  useEffect(() => {
    dispatch({ type: AUTH_CHECK });
    setIsMounted(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loggedIn) {
      body.style.color = palette[mode].PRIMARY;
      body.style.backgroundColor = palette[mode].BACKGROUND;
      localStorage.setItem('theme', JSON.stringify(mode));
    } else {
      body.style.color = palette.light.PRIMARY;
      body.style.backgroundColor = palette.light.BACKGROUND;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(mode));
  }, [mode]);

  let route: JSX.Element = (
    <Layout loggedIn={loggedIn}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Layout>
  );

  if (loggedIn) {
    route = (
      <Layout loggedIn={loggedIn}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Layout>
    );
  }

  return (
    <ThemeProvider
      theme={{
        theme: mode,
        palette: themes.palette,
        media: themes.media,
        device: themes.device,
        setTheme: () => {
          const type = mode === 'light' ? 'dark' : 'light';
          body.style.color = palette[type].PRIMARY;
          body.style.backgroundColor = palette[type].BACKGROUND;
          setMode(type);
        },
      }}
    >
      <GlobalStyle />
      {loading || !isMounted ? (
        <SpinnerWithMessage position={{ position: 'absolute', top: '50%', left: '50%' }} message="Now Loading..." />
      ) : (
        route
      )}
    </ThemeProvider>
  );
};
