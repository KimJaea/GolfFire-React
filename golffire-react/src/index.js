import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import store from './store';
import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
<<<<<<< HEAD
  <Provider store={store}>
    <App />
  </Provider>
=======
    <App />
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
