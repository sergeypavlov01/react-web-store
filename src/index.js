import './index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

