import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "jquery/dist/jquery"
import { BrowserRouter as B } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <B>
    <App />
    </B>
  </React.StrictMode>
);
