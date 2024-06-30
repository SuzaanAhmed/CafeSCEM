import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import MenuComponent from './components/Menu';
import HomeComponent from './components/Home';
import FeedbackComponent from './components/Feedback';
import LoginComponent from './components/Login';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
      <Route path="/" element={<HomeComponent />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/feedback" element={<FeedbackComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;