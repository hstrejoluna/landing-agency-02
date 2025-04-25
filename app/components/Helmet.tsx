import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { useLanguage } from './LanguageProvider';

export const Helmet = () => {
  const { language } = useLanguage();
  
  // Localized metadata
  const metadata = {
    en: {
      title: "Tech Agency | Expert Development Services",
      description: "Professional tech agency offering front-end, back-end, data engineering, and cloud services. Our team of expert developers delivers high-quality software solutions.",
      keywords: "tech agency, software development, front-end, back-end, data engineering, AWS, cloud services",
    },
    es: {
      title: "Agencia Tecnológica | Servicios de Desarrollo Experto",
      description: "Agencia tecnológica profesional que ofrece servicios de front-end, back-end, ingeniería de datos y servicios en la nube. Nuestro equipo de desarrolladores expertos ofrece soluciones de software de alta calidad.",
      keywords: "agencia tecnológica, desarrollo de software, front-end, back-end, ingeniería de datos, AWS, servicios en la nube",
    },
    fr: {
      title: "Agence Technologique | Services de Développement Expert",
      description: "Agence technologique professionnelle offrant des services de front-end, back-end, ingénierie de données et services cloud. Notre équipe de développeurs experts fournit des solutions logicielles de haute qualité.",
      keywords: "agence technologique, développement logiciel, front-end, back-end, ingénierie des données, AWS, services cloud",
    }
  };

  const currentMetadata = metadata[language];
  const canonicalUrl = "https://www.yourtechagency.com"; // Replace with actual domain

  // JSON-LD structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tech Agency",
    "description": currentMetadata.description,
    "image": `${canonicalUrl}/images/logo.png`,
    "url": canonicalUrl,
    "telephone": "+1-234-567-8900", // Replace with actual phone
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Tech City",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "priceRange": "$$$",
    "sameAs": [
      "https://www.facebook.com/yourtechagency",
      "https://www.linkedin.com/company/yourtechagency",
      "https://twitter.com/yourtechagency"
    ],
    "serviceType": ["Front-End Development", "Back-End Development", "Data Engineering", "Cloud Services"],
    "founder": {
      "@type": "Person",
      "name": "Agency Founder"
    },
    "foundingDate": "2020"
  };

  return (
    <ReactHelmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{currentMetadata.title}</title>
      <meta name="description" content={currentMetadata.description} />
      <meta name="keywords" content={currentMetadata.keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={currentMetadata.title} />
      <meta property="og:description" content={currentMetadata.description} />
      <meta property="og:image" content={`${canonicalUrl}/images/og-image.jpg`} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : 'fr_FR'} />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={currentMetadata.title} />
      <meta name="twitter:description" content={currentMetadata.description} />
      <meta name="twitter:image" content={`${canonicalUrl}/images/twitter-image.jpg`} />
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      
      {/* Alternate language versions for SEO */}
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/en`} />
      <link rel="alternate" hrefLang="es" href={`${canonicalUrl}/es`} />
      <link rel="alternate" hrefLang="fr" href={`${canonicalUrl}/fr`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Google Tag Manager */}
      <script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXX');`}
      </script>
    </ReactHelmet>
  );
};