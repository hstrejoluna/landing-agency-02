'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, CheckCircle } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  services: ServiceItem[];
  icon: 'Code' | 'Server' | 'Database' | 'Cloud';
  reversed?: boolean;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  description,
  services,
  icon,
  reversed = false,
}) => {
  // Map string icon name to actual component
  const IconComponent = {
    Code,
    Server,
    Database,
    Cloud,
  }[icon];

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
        duration: 0.4
      }
    }
  };

  return (
    <section id={id} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12`}>
          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <IconComponent size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-xl">
              {description}
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">{service.title}</h3>
                    <p className="text-sm text-foreground/70">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Illustration */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-secondary/20 rounded-2xl" />
              <div className="absolute inset-8 border-2 border-dashed border-primary/30 rounded-xl flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <IconComponent size={48} />
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-12 right-12 w-12 h-12 bg-secondary/30 rounded-lg"
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-16 left-16 w-16 h-16 bg-primary/20 rounded-full"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};