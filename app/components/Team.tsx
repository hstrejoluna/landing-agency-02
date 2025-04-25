import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Alex Rodriguez',
    role: 'Full-Stack Developer',
    bio: 'Expert in front-end technologies and cloud infrastructure with 8+ years of experience.',
    image: 'https://placehold.co/600x400/44403c/ffffff?text=AR',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Jessica Wang',
    role: 'Back-End Developer',
    bio: 'Specialized in building scalable APIs and microservices architecture.',
    image: 'https://placehold.co/600x400/44403c/ffffff?text=JW',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Michael Torres',
    role: 'Data Engineer',
    bio: 'Passionate about transforming data into actionable business insights.',
    image: 'https://placehold.co/600x400/44403c/ffffff?text=MT',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    }
  }
];

export const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Developers</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A talented trio of developers with expertise across the full technology stack.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-card rounded-xl overflow-hidden border border-border group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with social links */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a href={member.social.github} className="w-10 h-10 rounded-full bg-background/20 hover:bg-primary flex items-center justify-center transition-colors duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-background/20 hover:bg-primary flex items-center justify-center transition-colors duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-background/20 hover:bg-primary flex items-center justify-center transition-colors duration-300">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-foreground/70">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};