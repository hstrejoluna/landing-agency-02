import React from 'react';
import { Code, Server, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export const ServicesOverview = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'frontend',
      title: t('frontend.title'),
      description: t('frontend.description'),
      icon: Code,
    },
    {
      id: 'backend',
      title: t('backend.title'),
      description: t('backend.description'),
      icon: Server,
    },
    {
      id: 'data',
      title: t('data.title'),
      description: t('data.description'),
      icon: Database,
    },
    {
      id: 'cloud',
      title: t('cloud.title'),
      description: t('cloud.description'),
      icon: Cloud,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            {t('services.tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-card hover:bg-card/80 border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg group"
              whileHover={{ y: -5 }}
            >
              <a 
                href={`#${service.id}`}
                className="block h-full space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};