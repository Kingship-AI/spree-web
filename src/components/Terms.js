import React from 'react';

function Terms() {
  // URL of your terms and conditions PDF
  const termsUrl = 'https://drive.google.com/file/d/1t5aYymSIXn9hA_kWMaMOVx8p0VsAQDWy/preview';

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
      {/* Embedding the Terms and Conditions PDF */}
      <iframe 
        src={termsUrl} 
        title="Terms and Conditions" 
        width="100%" 
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default Terms;
