import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import './Contact.css';

/**
 * Contact page component that displays contact form and information
 * @returns {React.JSX.Element} The contact page component
 */
const Contact: React.FC = (): React.JSX.Element => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-description">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>
        
        <div className="contact-content">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
