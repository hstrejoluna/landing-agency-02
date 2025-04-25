import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers'

const getLanguage = () => {
  const headersList = headers()
  const path = headersList.get('x-invoke-path')
  const language = path?.split('/')[1]
  return language && (['en','es','fr'].includes(language)) ? language : 'en'
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const canonicalUrl = "https://www.yourtechagency.com"; // Replace with actual domain
const metadataContent = {
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

const structuredData = (language:string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tech Agency",
  "description": metadataContent[language].description,
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
});

export async function generateMetadata(): Promise<Metadata> {
  const language = getLanguage();
  const currentMetadata = metadataContent[language];

  return {
    metadataBase: new URL('https://www.yourtechagency.com'),
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: currentMetadata.title,
      description: currentMetadata.description,
      images: [`${canonicalUrl}/images/og-image.jpg`],
      locale: language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : 'fr_FR',
      alternateLocale: ['en_US', 'es_ES', 'fr_FR']
    },
    twitter: {
      card: "summary_large_image",
      url: canonicalUrl,
      title: currentMetadata.title,
      description: currentMetadata.description,
      images: [`${canonicalUrl}/images/twitter-image.jpg`],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/logo192.png',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${canonicalUrl}/en`,
        'es': `${canonicalUrl}/es`,
        'fr': `${canonicalUrl}/fr`,
        'x-default': canonicalUrl,
      },
    },
    other: {
      "google-tag-manager": `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-XXXX');`,
      "ld+json": JSON.stringify(structuredData(language)),
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getLanguage()}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
