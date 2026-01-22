import React from 'react';

function PrivacyPolicy() {
  // URL of your terms and conditions PDF
  const privacyUrl = 'https://drive.google.com/file/d/1zBmdBnvS512BzFOAzzlvWQI79Ee0jjZf/preview';

  return (
    <div style={{
      backgroundColor: "#1a1a1a", 
      height: "100vh", 
      width: "100vw",
      margin: 0,
      padding: 0,
      position: "fixed",
      top: 0,
      left: 0
    }}>
      {/* Embedding the Privacy Policy PDF */}
      <iframe 
        src={privacyUrl} 
        title="Privacy Policy" 
        width="100%" 
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default PrivacyPolicy;
