import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Code, GraduationCap, Star, Trophy } from 'lucide-react';
import './Interests.css';

/**
 * Interests component that displays personal interests and hobbies
 * @returns {React.JSX.Element} The interests section component
 */
const Interests: React.FC = (): React.JSX.Element => {
  const interests = [
    {
      icon: Award,
      title: 'AWS Cloud Practitioner',
      description: 'AWS Certified Cloud Practitioner (CLF-C02) - Cloud computing fundamentals'
    },
    {
      icon: Cloud,
      title: 'Google Cloud',
      description: 'Architecting with Google Compute Engine - 5 courses completed'
    },
    {
      icon: Code,
      title: 'React Complete Guide',
      description: 'React - The Complete Guide 2023 (incl. React Router & Redux)'
    },
    {
      icon: Star,
      title: 'University Rank',
      description: 'Secured 10th Rank with 9.49 CGPA in University Examination'
    },
    {
      icon: GraduationCap,
      title: 'Young Scientist Event',
      description: 'Co-ordinator in Young Scientist Event at college'
    },
    {
      icon: Trophy,
      title: 'Google Cloud Events',
      description: 'Completed various Google Cloud Events like Google Facilitator Program'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="interests section">
      <div className="container">
        <motion.div
          className="interests-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-description">
            Professional certifications and academic achievements that showcase my expertise
          </p>
        </motion.div>

        <motion.div
          className="interests-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="interest-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="interest-icon">
                <interest.icon className="icon" />
              </div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
