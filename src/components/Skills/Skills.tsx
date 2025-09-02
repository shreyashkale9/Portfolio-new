import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Palette, Zap } from 'lucide-react';
import './Skills.css';

/**
 * Skills component that displays technical skills and expertise areas
 * @returns {React.JSX.Element} The skills section component
 */
const Skills: React.FC = (): React.JSX.Element => {
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      description: 'Java, JavaScript, TypeScript, Python, HTML5, CSS3, SQL',
      color: '#6366f1'
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript',
      color: '#8b5cf6'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express.js, MongoDB, REST APIs, JWT Authentication',
      color: '#06b6d4'
    },
    {
      icon: Zap,
      title: 'Cloud & DevOps',
      description: 'AWS Cloud Practitioner, Google Cloud, Git, GitHub, LaTeX',
      color: '#3b82f6'
    },
    {
      icon: Palette,
      title: 'AI/ML & Computer Vision',
      description: 'OpenCV, YOLOv8, PyTorch, NumPy, Deep Learning',
      color: '#10b981'
    },
    {
      icon: Smartphone,
      title: 'Tools & Technologies',
      description: 'Tailwind CSS, MUI, SCSS, CVAT, LabelImg, Braintree',
      color: '#f59e0b'
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
    <section className="skills section">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">
            I specialize in modern web technologies and best practices
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                <skill.icon className="icon" />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
