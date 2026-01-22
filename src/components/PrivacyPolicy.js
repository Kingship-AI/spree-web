import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';
import spreeLogo from '../assets/spree-logo.png';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <Link to="/" className="privacy-logo-link">
          <img src={spreeLogo} alt="Spree" className="privacy-logo" />
        </Link>
      </header>
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <div className="privacy-content">
          <p>Privacy Policy content will go here...</p>
        </div>
        <Link to="/" className="back-link">← Back to home</Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
