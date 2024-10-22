import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, NavigationBar } from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavigationBar />
        <Routes>
            <Route path='/' element={<App/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
);
