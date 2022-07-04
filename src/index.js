import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  App,
  AppStatistic,
  AppFriendList,
  AppTransactionHistory,
} from 'components/App/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <AppStatistic />
      <AppFriendList />
      <AppTransactionHistory />
    </ThemeProvider>
  </React.StrictMode>
);
