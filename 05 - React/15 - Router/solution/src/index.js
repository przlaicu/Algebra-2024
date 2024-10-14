import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navigation from './Components/Navigation';
import Contacts from './Components/Contacts';
import Animals from './Components/Animals';
import User from './Components/User';
import { BrowserRouter, Routes, Route } from  'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navigation />
  <Routes>
    <Route path='/' element={<App /> } />
    <Route path='/user' element={<User /> } />
    <Route path='/animals' element={<Animals /> } />
    <Route path='/contacts' element={<Contacts /> } />
  </Routes>
  </BrowserRouter>
);
