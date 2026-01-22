import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import spreeLogo from '../assets/spree-logo.png';
import phoneMockup from '../assets/phone-mockup.png';
import appleLogo from '../assets/apple-logo.svg';
import cardPersonalized from '../assets/card_personalized.png';
import cardOffers from '../assets/card_offers.png';
import cardBuy from '../assets/card_buy.png';
import ComingSoonModal from './ComingSoonModal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
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
            <button 
              onClick={handleDownloadClick}
              className="download-button-header"
            >
              <img src={appleLogo} alt="Apple" className="apple-logo" />
              Download on iOS
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">
              The best deals,<br />in one feed
            </h1>
            <p className="hero-description">
              Scroll a personalized deal feed from stores across the internet. Save what you like, buy in seconds.
            </p>
            <p className="hero-features">
              Across stores • Real reviews • Buy in seconds
            </p>
            <div className="hero-buttons">
              <div className="hero-buttons-wrapper">
                <button 
                  onClick={handleDownloadClick}
                  className="download-button-hero"
                >
                  <img src={appleLogo} alt="Apple" className="apple-logo" />
                  Download on iOS
                </button>
                <button 
                  className="see-how-button"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  See how it works
                </button>
              </div>
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
                <img src={cardPersonalized} alt="Personalized deal feed" />
              </div>
              <h3 className="feature-title">Personalized deal feed</h3>
              <p className="feature-description">Pick interests and Spree builds your feed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={cardOffers} alt="Best offers across stores" />
              </div>
              <h3 className="feature-title">Best offers across stores</h3>
              <p className="feature-description">We compare prices across online stores.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={cardBuy} alt="Buy in seconds" />
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
          <button 
            onClick={handleDownloadClick}
            className="download-button-cta"
          >
            <img src={appleLogo} alt="Apple" className="apple-logo" />
            Download on iOS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <Link to="/terms" className="footer-link">Terms</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy</Link>
          <a href="mailto:support@getspree.app" className="footer-link">Support</a>
          <Link to="/team" className="footer-link">Team</Link>
        </div>
      </footer>

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default LandingPage;
