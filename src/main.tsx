import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ExpenseProvider } from './context/expnese-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>
);
