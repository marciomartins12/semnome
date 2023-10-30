import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import Store from './Store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={Store} >
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>}/>
{/* carrinho de compra aqui depois */}
  </Routes>
  
  </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
