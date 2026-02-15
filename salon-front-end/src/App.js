import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './js/Login';
import Register from './js/Register';
import Home from './js/Home';
import Masters from './js/Masters';
import Create_client from './js/Create_client.jsx';
import Dashboard from './js/Dashboard.jsx';
import './App.css';
import Profile from './js/Profile.jsx';

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/create_client" element={<Create_client />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
