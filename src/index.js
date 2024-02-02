import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import App from './App';
import landingDefaultTheme from './themes/landingTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={landingDefaultTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
);
