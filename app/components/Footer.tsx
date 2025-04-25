import React from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin,
  Code,
  Server,
  Database,
  Cloud
} from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">TechAgency</h3>
            <p className="text-foreground/70 mb-6">
              Professional tech agency offering comprehensive development solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-muted/80 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-muted/80 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-muted/80 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#frontend" className="text-foreground/70 hover:text-primary flex items-center space-x-2">
                  <Code size={16} />
                  <span>{t('frontend.title')}</span>
                </a>
              </li>
              <li>
                <a href="#backend" className="text-foreground/70 hover:text-primary flex items-center space-x-2">
                  <Server size={16} />
                  <span>{t('backend.title')}</span>
                </a>
              </li>
              <li>
                <a href="#data" className="text-foreground/70 hover:text-primary flex items-center space-x-2">
                  <Database size={16} />
                  <span>{t('data.title')}</span>
                </a>
              </li>
              <li>
                <a href="#cloud" className="text-foreground/70 hover:text-primary flex items-center space-x-2">
                  <Cloud size={16} />
                  <span>{t('cloud.title')}</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#team" className="text-foreground/70 hover:text-primary">
                  {t('nav.team')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.contactInfo')}</h3>
            <address className="not-italic space-y-3 text-foreground/70">
              <p>123 Tech Street</p>
              <p>Tech City, 12345</p>
              <p>
                <a href="mailto:info@techagency.com" className="hover:text-primary">
                  info@techagency.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-primary">
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-foreground/70">
          <p>© {currentYear} TechAgency. {t('footer.rights')}</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-primary">{t('footer.privacy')}</a> | 
            <a href="#" className="hover:text-primary ml-2">{t('footer.terms')}</a>
          </p>
          
          {/* Structured data/SEO attribution */}
          <div className="hidden">
            <span itemProp="name">TechAgency</span>
            <span itemProp="description">Professional tech agency offering front-end, back-end, data engineering, and cloud services.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};