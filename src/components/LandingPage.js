import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import spreeLogo from '../assets/spree-logo.png';
import phoneMockup from '../assets/phone-mockup.png';
import appleLogo from '../assets/apple-logo.svg';

const LandingPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <img src={spreeLogo} alt="Spree" className="logo" />
          </div>
          <nav className="nav">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('how-it-works')}
            >
              How it works
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </button>
            <a 
              href="https://apps.apple.com/app/spree" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-button-header"
            >
              <img src={appleLogo} alt="Apple" className="apple-logo" />
              Download on iOS
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">The best deals, in one feed</h1>
            <p className="hero-description">
              Scroll a personalized deal feed from stores across the internet. Save what you like, buy in seconds.
            </p>
            <p className="hero-features">
              Across stores • Real reviews • Buy in seconds
            </p>
            <div className="hero-buttons">
              <a 
                href="https://apps.apple.com/app/spree" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-button-hero"
              >
                <img src={appleLogo} alt="Apple" className="apple-logo" />
                Download on iOS
              </a>
              <button 
                className="see-how-button"
                onClick={() => scrollToSection('how-it-works')}
              >
                See how it works
              </button>
            </div>
          </div>
          <div className="hero-phone">
            <img src={phoneMockup} alt="Spree app preview" className="phone-image" />
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How it works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="40" rx="4" stroke="#999" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="20" x2="32" y2="20" stroke="#999" strokeWidth="2"/>
                  <line x1="16" y1="26" x2="32" y2="26" stroke="#999" strokeWidth="2"/>
                  <line x1="16" y1="32" x2="28" y2="32" stroke="#999" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="feature-title">Personalized deal feed</h3>
              <p className="feature-description">Pick interests and Spree builds your feed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="12" height="12" rx="2" stroke="#999" strokeWidth="2" fill="none"/>
                  <text x="14" y="18" fontSize="12" fill="#999" textAnchor="middle" fontWeight="600">$</text>
                  <rect x="24" y="8" width="12" height="12" rx="2" stroke="#999" strokeWidth="2" fill="none"/>
                  <text x="30" y="18" fontSize="12" fill="#999" textAnchor="middle" fontWeight="600">$$</text>
                  <rect x="8" y="24" width="12" height="12" rx="2" stroke="#999" strokeWidth="2" fill="none"/>
                  <text x="14" y="34" fontSize="12" fill="#999" textAnchor="middle" fontWeight="600">$$$</text>
                </svg>
              </div>
              <h3 className="feature-title">Best offers across stores</h3>
              <p className="feature-description">We compare prices across online stores.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="24" rx="4" stroke="#999" strokeWidth="2" fill="none"/>
                  <path d="M16 20 L22 26 L32 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="8" y="36" width="32" height="8" rx="2" fill="#999"/>
                  <text x="24" y="42" fontSize="8" fill="white" textAnchor="middle" fontWeight="600">BUY</text>
                </svg>
              </div>
              <h3 className="feature-title">Buy in seconds</h3>
              <p className="feature-description">Save products or check out instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="section-container">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">Is Spree free?</h3>
              <p className="faq-answer">Yes. Spree is free to download and use.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Where do the deals come from?</h3>
              <p className="faq-answer">We find deals across online stores and put the best options into one personalized feed.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How does Spree personalize my feed?</h3>
              <p className="faq-answer">Based on your interests and what you tap, save, and share.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I buy directly in Spree?</h3>
              <p className="faq-answer">Yes. You can check out in the app for a fast, simple purchase experience.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What stores do you support?</h3>
              <p className="faq-answer">Spree pulls deals from across the internet. Store coverage keeps expanding over time.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How do I get support?</h3>
              <p className="faq-answer">Email us anytime at support@getspree.app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="section-container">
          <h2 className="cta-title">Ready to start scrolling deals?</h2>
          <a 
            href="https://apps.apple.com/app/spree" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-button-cta"
          >
            <img src={appleLogo} alt="Apple" className="apple-logo" />
            Download on iOS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <Link to="/terms" className="footer-link">Terms</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy</Link>
          <a href="mailto:support@getspree.app" className="footer-link">Support</a>
          <a href="mailto:team@getspree.app" className="footer-link">Team</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
