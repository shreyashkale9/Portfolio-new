import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

/**
 * CallToAction component that encourages visitors to contact or hire
 * @returns {React.JSX.Element} The call to action section component
 */
const CallToAction: React.FC = (): React.JSX.Element => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          className="cta-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="cta-text" variants={itemVariants}>
            <h2 className="cta-title">
              Ready to work together?
            </h2>
            <p className="cta-description">
              Let's discuss your project and bring your ideas to life. 
              I'm always excited to work on new challenges and create 
              amazing digital experiences.
            </p>
          </motion.div>

          <motion.div className="cta-actions" variants={itemVariants}>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Start a Project
              <ArrowRight className="btn-icon" />
            </Link>
            
            <div className="cta-contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>shreyashkale9@gmail.com</span>
              </div>
              <div className="contact-item">
                <MessageCircle className="contact-icon" />
                <span>Available for freelance</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
