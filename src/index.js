import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Count from './components/Count';
import School from './components/School';
import Times from './components/Times';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Count />
    <School />
    <Times />
  </React.StrictMode>
);


