import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Github } from 'lucide-react';
import './AboutHero.css';

/**
 * AboutHero component that displays personal introduction and contact details
 * @returns {React.JSX.Element} The about hero section component
 */
const AboutHero: React.FC = (): React.JSX.Element => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Bengaluru, India' },
    { icon: Phone, label: 'Phone', value: '+91 9653268606' },
    { icon: Mail, label: 'Email', value: 'shreyashkale9@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/shreyashkale9' }
  ];

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
    <section className="about-hero">
      <div className="container">
        <motion.div
          className="about-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              I'm a Software Engineer at Cognizant with a strong foundation in Computer Science 
              and Engineering. I specialize in developing innovative solutions using modern 
              technologies like React, Node.js, and cloud platforms.
            </p>
            <p className="about-description">
              With a 9.49 CGPA and 10th rank in university, I'm passionate about 
              AI/ML, web development, and cloud computing. I love turning complex 
              problems into elegant, scalable solutions.
            </p>
          </motion.div>

          <motion.div className="about-image-section" variants={itemVariants}>
            <div className="profile-image">
              <User className="profile-icon" />
            </div>
            
            <div className="personal-details">
              {personalInfo.map((info, index) => (
                <div key={index} className="detail-item">
                  <info.icon className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">{info.label}</span>
                    <span className="detail-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
