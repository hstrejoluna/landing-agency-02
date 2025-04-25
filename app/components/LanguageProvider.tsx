'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Initialize with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Define translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',
    
    // Hero Section
    'hero.tag': 'Expert Development Services',
    'hero.title': 'Transforming Ideas Into',
    'hero.titleHighlight': 'Digital Excellence',
    'hero.description': 'A team of expert developers delivering comprehensive solutions in front-end, back-end, data engineering, and cloud services.',
    'hero.cta.services': 'View Our Services',
    'hero.cta.team': 'Meet The Team',
    'hero.trustedBy': 'Trusted By',

    // Services Overview
    'services.tag': 'Our Expertise',
    'services.title': 'Comprehensive Development Services',
    'services.description': 'We offer end-to-end solutions across the full development stack, from user-facing interfaces to complex data infrastructure.',
    
    // Frontend Services
    'frontend.title': 'Front-End Development',
    'frontend.description': 'Creating exceptional user experiences across all platforms',
    
    // Backend Services
    'backend.title': 'Back-End Development',
    'backend.description': 'Building robust, scalable infrastructure to power your applications',
    
    // Data Engineering Services
    'data.title': 'Data Engineering',
    'data.description': 'Transforming raw data into valuable business insights',
    
    // Cloud Services
    'cloud.title': 'Cloud Services (AWS)',
    'cloud.description': 'Harnessing the power of AWS to drive innovation and efficiency',
    
    // Testimonials Section
    'testimonials.tag': 'Client Testimonials',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'We pride ourselves on delivering exceptional service and results for our clients. Here\'s what they have to say.',
    
    // Team Section
    'team.tag': 'Our Team',
    'team.title': 'Meet Our Expert Developers',
    'team.description': 'A talented trio of developers with expertise across the full technology stack.',
    
    // Contact Section
    'contact.tag': 'Get In Touch',
    'contact.title': 'Contact Us',
    'contact.description': 'Have a project in mind? Let\'s discuss how our development expertise can help bring your ideas to life.',
    'contact.email.title': 'Email Us',
    'contact.email.subtitle': 'We\'ll respond within 24 hours',
    'contact.phone.title': 'Call Us',
    'contact.phone.subtitle': 'Mon-Fri from 9am to 6pm',
    'contact.visit.title': 'Visit Us',
    'contact.visit.subtitle': 'Our office location',
    'contact.form.title': 'Send us a Message',
    'contact.form.description': 'Fill out the form below and we\'ll get back to you as soon as possible.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.namePlace': 'Your name',
    'contact.form.emailPlace': 'Your email',
    'contact.form.subjectPlace': 'What\'s this about?',
    'contact.form.messagePlace': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.services': 'Our Services',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Information',
    'footer.rights': '© 2023 TechAgency. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Language Selector
    'language.select': 'Select Language',
    'language.english': 'English',
    'language.spanish': 'Spanish',
    'language.french': 'French',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    'nav.getQuote': 'Solicitar Presupuesto',
    
    // Hero Section
    'hero.tag': 'Servicios de Desarrollo Experto',
    'hero.title': 'Transformando Ideas en',
    'hero.titleHighlight': 'Excelencia Digital',
    'hero.description': 'Un equipo de desarrolladores expertos que ofrecen soluciones integrales en desarrollo front-end, back-end, ingeniería de datos y servicios en la nube.',
    'hero.cta.services': 'Ver Nuestros Servicios',
    'hero.cta.team': 'Conocer al Equipo',
    'hero.trustedBy': 'Confían en Nosotros',

    // Services Overview
    'services.tag': 'Nuestra Experiencia',
    'services.title': 'Servicios Integrales de Desarrollo',
    'services.description': 'Ofrecemos soluciones completas en toda la pila de desarrollo, desde interfaces de usuario hasta infraestructura de datos compleja.',
    
    // Frontend Services
    'frontend.title': 'Desarrollo Front-End',
    'frontend.description': 'Creando experiencias excepcionales en todas las plataformas',
    
    // Backend Services
    'backend.title': 'Desarrollo Back-End',
    'backend.description': 'Construyendo infraestructura robusta y escalable para potenciar sus aplicaciones',
    
    // Data Engineering Services
    'data.title': 'Ingeniería de Datos',
    'data.description': 'Transformando datos sin procesar en información valiosa para el negocio',
    
    // Cloud Services
    'cloud.title': 'Servicios en la Nube (AWS)',
    'cloud.description': 'Aprovechando el poder de AWS para impulsar la innovación y la eficiencia',
    
    // Testimonials Section
    'testimonials.tag': 'Testimonios de Clientes',
    'testimonials.title': 'Lo que Dicen Nuestros Clientes',
    'testimonials.description': 'Nos enorgullecemos de ofrecer un servicio y resultados excepcionales para nuestros clientes. Esto es lo que dicen.',
    
    // Team Section
    'team.tag': 'Nuestro Equipo',
    'team.title': 'Conozca a Nuestros Desarrolladores Expertos',
    'team.description': 'Un talentoso trío de desarrolladores con experiencia en toda la pila tecnológica.',
    
    // Contact Section
    'contact.tag': 'Póngase en Contacto',
    'contact.title': 'Contáctenos',
    'contact.description': '¿Tiene un proyecto en mente? Hablemos de cómo nuestra experiencia en desarrollo puede ayudar a dar vida a sus ideas.',
    'contact.email.title': 'Envíenos un Email',
    'contact.email.subtitle': 'Responderemos en 24 horas',
    'contact.phone.title': 'Llámenos',
    'contact.phone.subtitle': 'Lun-Vie de 9am a 6pm',
    'contact.visit.title': 'Visítenos',
    'contact.visit.subtitle': 'Nuestra ubicación',
    'contact.form.title': 'Envíenos un Mensaje',
    'contact.form.description': 'Complete el formulario a continuación y nos pondremos en contacto lo antes posible.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.namePlace': 'Su nombre',
    'contact.form.emailPlace': 'Su correo electrónico',
    'contact.form.subjectPlace': '¿De qué se trata?',
    'contact.form.messagePlace': 'Cuéntenos sobre su proyecto...',
    'contact.form.submit': 'Enviar Mensaje',
    
    // Footer
    'footer.services': 'Nuestros Servicios',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contactInfo': 'Información de Contacto',
    'footer.rights': '© 2023 TechAgency. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    
    // Language Selector
    'language.select': 'Seleccionar Idioma',
    'language.english': 'Inglés',
    'language.spanish': 'Español',
    'language.french': 'Francés',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.team': 'Équipe',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Demander un Devis',
    
    // Hero Section
    'hero.tag': 'Services de Développement Expert',
    'hero.title': 'Transformer les Idées en',
    'hero.titleHighlight': 'Excellence Numérique',
    'hero.description': 'Une équipe de développeurs experts offrant des solutions complètes en développement front-end, back-end, ingénierie de données et services cloud.',
    'hero.cta.services': 'Voir Nos Services',
    'hero.cta.team': 'Rencontrer l\'Équipe',
    'hero.trustedBy': 'Ils Nous Font Confiance',

    // Services Overview
    'services.tag': 'Notre Expertise',
    'services.title': 'Services de Développement Complets',
    'services.description': 'Nous offrons des solutions de bout en bout sur l\'ensemble de la pile de développement, des interfaces utilisateur aux infrastructures de données complexes.',
    
    // Frontend Services
    'frontend.title': 'Développement Front-End',
    'frontend.description': 'Créer des expériences utilisateur exceptionnelles sur toutes les plateformes',
    
    // Backend Services
    'backend.title': 'Développement Back-End',
    'backend.description': 'Construction d\'infrastructures robustes et évolutives pour alimenter vos applications',
    
    // Data Engineering Services
    'data.title': 'Ingénierie des Données',
    'data.description': 'Transformer les données brutes en informations commerciales précieuses',
    
    // Cloud Services
    'cloud.title': 'Services Cloud (AWS)',
    'cloud.description': 'Exploiter la puissance d\'AWS pour stimuler l\'innovation et l\'efficacité',
    
    // Testimonials Section
    'testimonials.tag': 'Témoignages Clients',
    'testimonials.title': 'Ce que Disent Nos Clients',
    'testimonials.description': 'Nous sommes fiers d\'offrir un service et des résultats exceptionnels à nos clients. Voici ce qu\'ils en disent.',
    
    // Team Section
    'team.tag': 'Notre Équipe',
    'team.title': 'Rencontrez Nos Développeurs Experts',
    'team.description': 'Un trio talentueux de développeurs avec une expertise sur l\'ensemble de la pile technologique.',
    
    // Contact Section
    'contact.tag': 'Contactez-Nous',
    'contact.title': 'Nous Contacter',
    'contact.description': 'Vous avez un projet en tête ? Discutons de la façon dont notre expertise en développement peut vous aider à donner vie à vos idées.',
    'contact.email.title': 'Écrivez-Nous',
    'contact.email.subtitle': 'Nous répondrons sous 24 heures',
    'contact.phone.title': 'Appelez-Nous',
    'contact.phone.subtitle': 'Lun-Ven de 9h à 18h',
    'contact.visit.title': 'Visitez-Nous',
    'contact.visit.subtitle': 'Notre emplacement',
    'contact.form.title': 'Envoyez-nous un Message',
    'contact.form.description': 'Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.namePlace': 'Votre nom',
    'contact.form.emailPlace': 'Votre email',
    'contact.form.subjectPlace': 'De quoi s\'agit-il ?',
    'contact.form.messagePlace': 'Parlez-nous de votre projet...',
    'contact.form.submit': 'Envoyer le Message',
    
    // Footer
    'footer.services': 'Nos Services',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contactInfo': 'Informations de Contact',
    'footer.rights': '© 2023 TechAgency. Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    
    // Language Selector
    'language.select': 'Sélectionner la Langue',
    'language.english': 'Anglais',
    'language.spanish': 'Espagnol',
    'language.french': 'Français',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem('tech-agency-language');
    // Check if it's a valid language
    if (savedLanguage && ['en', 'es', 'fr'].includes(savedLanguage)) {
      return savedLanguage as Language;
    }
    
    // If no valid language is found in localStorage, try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'es', 'fr'].includes(browserLang)) {
      return browserLang as Language;
    }
    
    // Default to English
    return 'en';
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('tech-agency-language', language);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};