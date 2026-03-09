import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { QRCodeSVG } from 'qrcode.react';
import './SharedProductPage.css';
import { fetchSharedProduct } from '../utils/api';
import spreeLogo from '../assets/spree-logo.png';
import appleLogo from '../assets/apple-logo.svg';
import ComingSoonModal from './ComingSoonModal';

const SharedProductPage = () => {
  const { shareId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!shareId) {
        setError('Invalid share link');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchSharedProduct(shareId);
        if (data.success && data.product) {
          setProduct(data.product);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('[SharedProductPage] Error loading product:', err);
        setError(err.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [shareId]);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const scrollToSection = (sectionId) => {
    // Navigate to landing page with hash anchor
    window.location.href = `/#${sectionId}`;
  };

  const handleOpenWithSpree = () => {
    // Open App Store link directly
    window.location.href = 'https://apps.apple.com/us/app/id6747330233';
  };

  if (loading) {
    return (
      <div className="shared-product-page">
        <div className="loading-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="loading-spinner"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="shared-product-page">
        <div className="error-container" style={{ position: 'relative', zIndex: 10 }}>
          <h1>Product Not Found</h1>
          <p>The shared product link is invalid or has expired.</p>
          <button onClick={() => navigate('/')} className="back-button">
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const productImage = product.image || product.image_url || '';
  const productTitle = product.title || product.name || 'Product';
  const productPrice = product.price || '';
  const whyText = product.why_this_pick || product.whyThisPick || product.why || product.reason || '';

  // Open Graph meta tags
  const ogImage = productImage || 'https://getspree.app/spree-logo.png';
  const ogTitle = `${productTitle} | Spree`;
  const ogDescription = whyText || `Check out this great deal: ${productTitle}`;
  const shareUrl = `https://getspree.app/share/${shareId}`;

  return (
    <>
      <Helmet>
        <title>{ogTitle}</title>
        <meta name="description" content={ogDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spree" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={shareUrl} />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="shared-product-page">
        {/* Background Layers */}
        {productImage && (
          <div className="background-layers">
            <div className="background-layer-1" style={{ backgroundImage: `url(${productImage})` }}></div>
            <div className="background-layer-2"></div>
            <div className="background-layer-3"></div>
          </div>
        )}

        {/* Header */}
        <header className="shared-header">
          <div className="shared-header-container">
            <Link to="/" className="logo-container">
              <img src={spreeLogo} alt="Spree" className="logo" />
            </Link>
            <button 
              onClick={handleDownloadClick}
              className="download-button-header"
            >
              <img src={appleLogo} alt="Apple" className="apple-logo" />
              Download on iOS
            </button>
          </div>
        </header>

        {/* Product Content */}
        <div className="shared-product-container">
          {/* Mobile Layout */}
          <div className="shared-product-mobile">
            <div className="product-image-container">
              <img 
                src={productImage} 
                alt={productTitle}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image';
                }}
              />
            </div>
            
            <div className="product-details-mobile">
              <h1 className="product-title">{productTitle}</h1>
              
              <div className="price-row">
                <span className="product-price">{productPrice}</span>
              </div>
              
              {whyText && (
                <div className="why-section">
                  <div className="why-badge">Why this pick</div>
                  <p className="why-text">{whyText}</p>
                </div>
              )}
              
              <div className="mobile-cta-section">
                <button 
                  onClick={handleOpenWithSpree}
                  className="open-with-spree-button-mobile"
                >
                  <img src={appleLogo} alt="Apple" className="apple-logo-button-mobile" />
                  Open with Spree
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="shared-product-desktop">
            <div className="product-image-wrapper">
              <img 
                src={productImage} 
                alt={productTitle}
                className="product-image-desktop"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600?text=Product+Image';
                }}
              />
            </div>
            
            <div className="product-details-desktop">
              <h1 className="product-title-desktop">{productTitle}</h1>
              
              <div className="price-row-desktop">
                <span className="product-price-desktop">{productPrice}</span>
              </div>
              
              {whyText && (
                <div className="why-section-desktop">
                  <div className="why-badge-desktop">Why this pick</div>
                  <p className="why-text-desktop">{whyText}</p>
                </div>
              )}
              
              <div className="cta-section-desktop">
                <button 
                  onClick={handleOpenWithSpree}
                  className="open-with-spree-button"
                >
                  <img src={appleLogo} alt="Apple" className="apple-logo-button" />
                  Get Spree on iPhone
                </button>
                
                <div className="qr-section">
                  <div className="qr-code-container">
                    <QRCodeSVG
                      value="https://apps.apple.com/us/app/id6747330233"
                      size={120}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                  <p className="qr-instruction">Scan to open Spree</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Coming Soon Modal */}
        <ComingSoonModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default SharedProductPage;
