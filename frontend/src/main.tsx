import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import '@fontsource/dotgothic16';
import '@fontsource/dotgothic16/japanese-400.css';
import './index.css';

const theme = createTheme({
  palette: {
    primary: { main: '#a9d9ec', light: '#a9d9ec', dark: '#92daf5' },
    secondary: { main: '#00000061', light: '#dfdfdf', dark: '#00000099' },
    text: {
      primary: '#222',
      secondary: '#eee',
    },
  },
  typography: {
    fontFamily: ['DotGothic16', 'sans-serif'].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
