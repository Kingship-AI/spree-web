import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import spreeLogo from '../assets/spree-logo.png';
import appleLogo from '../assets/apple-logo.svg';
import harrisonImage from '../assets/harrison_foko.jpg';
import yashImage from '../assets/yash_deshpande.png';
import rahulImage from '../assets/rahul_sohandani.jpeg';
import luvImage from '../assets/luv_patel.jpg';
import ComingSoonModal from './ComingSoonModal';

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const teamMembers = [
    {
      name: 'Harrison Foko',
      role: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/harrison-foko',
      image: harrisonImage
    },
    {
      name: 'Yash Deshpande',
      role: 'Full stack engineer',
      linkedin: 'https://www.linkedin.com/in/yash-deshpande5',
      image: yashImage
    },
    {
      name: 'Luv Patel',
      role: 'Full stack engineer',
      linkedin: 'https://www.linkedin.com/in/luvpatel2001',
      image: luvImage
    },
    {
      name: 'Rahul Sohandani',
      role: 'AI & data engineer',
      linkedin: 'https://www.linkedin.com/in/rahul-sohandani-9645a8202',
      image: rahulImage
    }
  ];

  return (
    <div className="team-page">
      {/* Header */}
      <header className="team-header">
        <div className="team-header-container">
          <Link to="/" className="team-logo-link">
            <img src={spreeLogo} alt="Spree" className="team-logo" />
          </Link>
          <button 
            onClick={handleDownloadClick}
            className="team-download-button"
          >
            <img src={appleLogo} alt="Apple" className="apple-logo" />
            Download on iOS
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="team-container">
        <div className="team-intro">
          <h1 className="team-title">Team</h1>
          <p className="team-mission">
            We're building spree, a personalized deal feed across stores.
          </p>
          <p className="team-location">Based in Silicon Valley</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-member-image"
              />
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="team-linkedin-button"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Team;
