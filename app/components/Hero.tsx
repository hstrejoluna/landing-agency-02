'use client'
import React from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10" />
      
      {/* Animated circles for background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-secondary/5"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              {t('hero.tag')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 text-base">
                {t('hero.cta.services')} <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                {t('hero.cta.team')}
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] bg-gradient-to-tr from-primary/20 via-background to-secondary/20 rounded-lg shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 border-2 border-primary/30 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-semibold text-foreground/70">Code. Create. Innovate.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted By section removed as requested */}
      </div>
    </section>
  );
};