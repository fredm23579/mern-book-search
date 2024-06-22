import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SavedBooks from './pages/SavedBooks';
import SearchBooks from './pages/SearchBooks';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchBooks />} />
        <Route path="/saved" element={<SavedBooks />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
