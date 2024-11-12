
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, for custom styles
import App from './App.js';  // Add .js extension explicitly

// Render the React app inside the div with id="root" (from index.html)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
