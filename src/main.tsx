import { createRoot } from 'react-dom/client';
import './global.css';
import App from './components/App/App';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
