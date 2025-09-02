import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';
import './ContactForm.css';

/**
 * ContactForm component with form validation and submission handling
 * @returns {React.JSX.Element} The contact form component
 */
const ContactForm: React.FC = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div
      className="contact-form"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="form-title">Send Message</h3>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            <User className="input-icon" />
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <Mail className="input-icon" />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="Enter your email address"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            <Phone className="input-icon" />
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            <MessageSquare className="input-icon" />
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter message subject"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            <MessageSquare className="input-icon" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            placeholder="Enter your message"
            rows={5}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary submit-btn"
          disabled={isSubmitting}
        >
          <Send className="btn-icon" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
