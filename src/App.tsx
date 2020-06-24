import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './hoc/Layout';
import { useTheme } from './hooks/useTheme';
import { GlobalStyle } from './themes/Global';
import { ThemeProvider } from './themes/ThemeProvider';

const loggedIn = true;
const body = document.querySelector('body');

const mode: 'light' | 'dark' = JSON.parse(localStorage.getItem('theme'));
const initialMode = mode === 'light' ? 'light' : 'dark';

export const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode);
  const themes = useTheme();
  const { palette } = themes;

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
      <Router>
        <Layout loggedIn={loggedIn} />
      </Router>
    </ThemeProvider>
  );
};
