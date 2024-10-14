import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navigation from './Components/Navigation';
import Balance from './Components/Balance';
import Expences from './Components/Expences';
import Invoice from './Components/Invoice';
import CustomInvoiceDetails from './Components/CustomInvoiceDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InvoiceDetail from './Components/InvoiceDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/balance' element={<Balance />}/>
      <Route path='/expences' element={<Expences />}/>
      <Route path='/invoice' element={<Invoice />}/>
      <Route path='/invoice/details/:invoiceId' element={<CustomInvoiceDetails />}/>
      <Route path='/invoice/detail' element={<InvoiceDetail />}/>
    </Routes>
  </BrowserRouter>
);
