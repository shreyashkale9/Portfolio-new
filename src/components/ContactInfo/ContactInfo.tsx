import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Globe, MessageCircle, Github, Twitter, Linkedin } from 'lucide-react';
import './ContactInfo.css';

/**
 * ContactInfo component that displays contact information and social links
 * @returns {React.JSX.Element} The contact information component
 */
const ContactInfo: React.FC = (): React.JSX.Element => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bengaluru, India',
      description: 'Available for remote work worldwide'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'shreyashkale9@gmail.com',
      description: 'I usually respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9653268606',
      description: 'Available Mon-Fri, 10AM-7PM IST'
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Open for Projects',
      description: 'Currently accepting new freelance work'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/shreyashkale9' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/shreyash-kale-aa404a1b3/' },
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/shreyashkale9' },
    { icon: Mail, label: 'Email', url: 'mailto:shreyashkale9@gmail.com' }
  ];

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
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="contact-info"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="info-title">Contact Information</h3>
      <p className="info-description">
        Feel free to reach out through any of these channels. 
        I'm always excited to hear about new projects and opportunities.
      </p>

      <div className="contact-details">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="contact-item"
            variants={itemVariants}
          >
            <div className="contact-icon">
              <info.icon className="icon" />
            </div>
            <div className="contact-text">
              <h4 className="contact-title">{info.title}</h4>
              <p className="contact-value">{info.value}</p>
              <p className="contact-description">{info.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="social-section">
        <h4 className="social-title">Connect With Me</h4>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              aria-label={social.label}
            >
              <social.icon className="social-icon" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
