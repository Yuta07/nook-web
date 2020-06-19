import React from 'react';
import { GlobalStyle } from './themes/Global';
import { theme } from './themes/Theme';
import { ThemeProvider } from './themes/ThemeProvider';

const themes = theme();

export const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <div>
        <p>App</p>
      </div>
    </ThemeProvider>
  );
};
