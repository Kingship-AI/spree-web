import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Spree - The best deals, in one feed",
  description = "Spree brings you the best deals from stores across the internet in one personalized feed. Save what you like, buy in seconds.",
  path = "/",
  image = "https://spree.ai/og-image.png",
  type = "website"
}) => {
  const url = `https://spree.ai${path}`;
  const fullTitle = title.includes('Spree') ? title : `${title} | Spree`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
