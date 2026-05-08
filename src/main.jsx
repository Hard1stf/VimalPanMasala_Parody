import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Tailwind and global utilities
import './index.css';
// App-level globals (background, variables)
import './app/globals.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
