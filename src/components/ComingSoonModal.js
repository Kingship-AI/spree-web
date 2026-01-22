import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import './ComingSoonModal.css';

const ComingSoonModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'waitlist'), {
        email,
        createdAt: serverTimestamp(),
        source: 'landing-page-modal',
        emailed: false,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">✨</div>
            <h2 className="modal-title">You're on the list!</h2>
            <p className="modal-message">
              We'll notify you as soon as Spree is available on the App Store.
            </p>
            <button className="modal-button" onClick={handleClose}>
              Got it
            </button>
          </div>
        ) : (
          <div className="modal-form-container">
            <h2 className="modal-title">Spree is coming soon!</h2>
            <p className="modal-message">
              Join our waitlist to be notified when we launch on the App Store.
            </p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modal-input"
                disabled={loading}
                required
              />
              {error && <div className="modal-error">{error}</div>}
              <button 
                type="submit" 
                className="modal-button" 
                disabled={loading}
              >
                {loading ? 'Joining...' : 'Notify Me'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoonModal;
