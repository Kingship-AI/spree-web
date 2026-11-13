import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './components/LandingPage';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import SharedProductPage from './components/SharedProductPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/team" element={<Navigate to="/" replace />} />
          <Route path="/share/:shareId" element={<SharedProductPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
