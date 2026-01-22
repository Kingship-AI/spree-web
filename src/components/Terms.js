import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';
import spreeLogo from '../assets/spree-logo.png';

const Terms = () => {
  return (
    <div className="terms-page">
      <header className="terms-header">
        <Link to="/" className="terms-logo-link">
          <img src={spreeLogo} alt="Spree" className="terms-logo" />
        </Link>
      </header>
      <div className="terms-container">
        <h1>Terms of Use</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <div className="terms-content">
          <p>Terms of Use content will go here...</p>
        </div>
        <Link to="/" className="back-link">← Back to home</Link>
      </div>
    </div>
  );
};

export default Terms;
