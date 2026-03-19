import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogImage }) => {
  const defaultTitle = "Shankar Children's Hospital | Best Pediatrician in Tuni";
  const defaultDesc = "Shankar Children's Hospital provides 24/7 expert pediatric care, newborn services, and emergency specialized treatment in Tuni, Andhra Pradesh.";
  const siteUrl = "https://shankarchildrenshospital.com";

  return (
    <Helmet>
      <title>{title ? `${title} | Shankar Children's Hospital` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`${siteUrl}${canonical || ""}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={`${siteUrl}${canonical || ""}`} />

      {/* Twitter */}
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
