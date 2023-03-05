import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/userscomment/UsersPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<h1>bungday sahifa yo'q</h1>} />
        <Route path='/comment/:id' element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
    {/* <App/>*/}
  </React.StrictMode>
);
