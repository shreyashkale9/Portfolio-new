import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Award } from 'lucide-react';
import './PersonalInfo.css';

/**
 * PersonalInfo component that displays personal details and background information
 * @returns {React.JSX.Element} The personal information component
 */
const PersonalInfo: React.FC = (): React.JSX.Element => {
  const personalDetails = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'I love creating digital experiences that make a difference in people\'s lives.'
    },
    {
      icon: Target,
      title: 'Goals',
      description: 'To build scalable, user-friendly applications that solve real-world problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'I thrive in team environments and enjoy mentoring other developers.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to writing clean, maintainable code and following best practices.'
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
    <section className="personal-info section">
      <div className="container">
        <motion.div
          className="personal-info-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Who I Am</h2>
          <p className="section-description">
            A dedicated developer passionate about creating meaningful digital experiences
          </p>
        </motion.div>

        <motion.div
          className="personal-info-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {personalDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="personal-info-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="card-icon">
                <detail.icon className="icon" />
              </div>
              <h3 className="card-title">{detail.title}</h3>
              <p className="card-description">{detail.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalInfo;
