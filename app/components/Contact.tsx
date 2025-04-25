'use client'
import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/app/components/ui/card';
import { Mail, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            {t('contact.tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.email.title')}</h3>
                  <p className="text-foreground/70 mb-2">{t('contact.email.subtitle')}</p>
                  <a href="mailto:info@techagency.com" className="text-primary hover:underline">
                    info@techagency.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.phone.title')}</h3>
                  <p className="text-foreground/70 mb-2">{t('contact.phone.subtitle')}</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.visit.title')}</h3>
                  <p className="text-foreground/70 mb-2">{t('contact.visit.subtitle')}</p>
                  <address className="not-italic text-primary">
                    123 Tech Street<br />
                    Tech City, 12345
                  </address>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  {t('contact.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        {t('contact.form.name')}
                      </label>
                      <Input id="name" placeholder={t('contact.form.namePlace')} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        {t('contact.form.email')}
                      </label>
                      <Input id="email" type="email" placeholder={t('contact.form.emailPlace')} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      {t('contact.form.subject')}
                    </label>
                    <Input id="subject" placeholder={t('contact.form.subjectPlace')} />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.form.messagePlace')}
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};