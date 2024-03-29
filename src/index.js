import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Context/CartContext';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
const baseUrl = "https://mealco-server-2.vercel.app"
axios.defaults.baseURL = baseUrl
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
