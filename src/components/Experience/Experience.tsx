import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import './Experience.css';

/**
 * Experience component that displays work history and professional timeline
 * @returns {React.JSX.Element} The experience section component
 */
const Experience: React.FC = (): React.JSX.Element => {
  const experiences = [
    {
      company: 'Cognizant',
      position: 'Programmer Analyst Trainee',
      period: 'Sep 2024 - Current',
      location: 'Bengaluru, India',
      description: 'Collaborated on projects, delivering IT solutions, and enhancing communication, teamwork, and problem-solving skills through structured workshops and behavioral sessions.',
      technologies: ['Java', 'SQL', 'Git', 'Team Collaboration'],
      link: 'https://www.cognizant.com'
    },
    {
      company: 'Enstitute',
      position: 'Web Development Intern',
      period: 'Mar 2024 - April 2024',
      location: 'Remote',
      description: 'Developed fully functional, regular, responsive pages for a website using Nextjs, Typescript, Tailwind CSS, MUI & API Integration.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MUI', 'API Integration'],
      link: 'https://enstitute.com'
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
    <section className="experience section">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            My professional journey in software development
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-content">
                <div className="experience-header-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    <ExternalLink className="link-icon" />
                  </a>
                </div>
                
                <h4 className="position-title">{exp.position}</h4>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar className="meta-icon" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
