import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './components/store/store.js';

const serv = true;

axios.defaults.baseURL = serv ? "https://kaboapi-production.up.railway.app" : "http://192.168.0.112:3002/"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
  </Provider>

)
