import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './config/route';
import { Layout } from './hoc/Layout';
import { GlobalStyle } from './themes/Global';
import { theme } from './themes/Theme';
import { ThemeProvider } from './themes/ThemeProvider';

const themes = theme();

export const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};
