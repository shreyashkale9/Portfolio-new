import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import './Education.css';

/**
 * Education component that displays educational background and achievements
 * @returns {React.JSX.Element} The education section component
 */
const Education: React.FC = (): React.JSX.Element => {
  const education = [
    {
      degree: 'B.E in Computer Science & Engineering',
      institution: 'Prof. Ram Meghe Institute of Technology and Research, Amravati',
      period: 'July 2024',
      location: 'Amravati, India',
      description: 'Specialized in Computer Science & Engineering with focus on software development and AI/ML',
      achievements: ['CGPA: 9.49/10', '10th Rank in University Examination']
    },
    {
      degree: 'Class XII',
      institution: 'R. K. Highschool & Jr. College, Pulgaon',
      period: 'March 2020',
      location: 'Pulgaon, India',
      description: 'Science Stream with Mathematics and Computer Science'
    },
    {
      degree: 'Class X',
      institution: 'St. John High School, Pulgaon',
      period: 'March 2018',
      location: 'Pulgaon, India',
      description: 'Foundation studies with strong academic performance'
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="education section">
      <div className="container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            My academic journey in computer science and software engineering
          </p>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              variants={itemVariants}
            >
              <div className="education-content">
                <div className="education-header-info">
                  <h3 className="degree">{edu.degree}</h3>
                  <div className="institution-info">
                    <h4 className="institution">{edu.institution}</h4>
                    <div className="education-meta">
                      <div className="meta-item">
                        <Calendar className="meta-icon" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin className="meta-icon" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="achievements">
                    <h5 className="achievements-title">
                      <Award className="achievement-icon" />
                      Key Achievements
                    </h5>
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
