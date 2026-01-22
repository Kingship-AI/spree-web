import React from 'react';
import SEO from './SEO';

function Terms() {
  // URL of your terms and conditions PDF
  const termsUrl = 'https://drive.google.com/file/d/1t5aYymSIXn9hA_kWMaMOVx8p0VsAQDWy/preview';

  return (
    <>
      <SEO 
        title="Terms and Conditions"
        description="Read Spree's Terms and Conditions. Learn about our service terms, user responsibilities, and legal agreements."
        path="/terms"
      />
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
    </>
  );
}

export default Terms;
