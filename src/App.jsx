// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import PartnerDetailPage from './pages/PartnerDetailPage';

function App() {
  return (
    <div className="font-sans bg-brand-blanco text-brand-verde-oscuro">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservar" element={<BookingPage />} />
          <Route path="/socios/:partnerId" element={<PartnerDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;