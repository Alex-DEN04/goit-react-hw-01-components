import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, AppStatistic, AppFriendList, AppTransactionHistory} from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppStatistic />
    <AppFriendList />
    <AppTransactionHistory />
  </React.StrictMode>
);