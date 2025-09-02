import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

/**
 * Hero component with animated introduction and call-to-action
 * @returns {React.JSX.Element} The hero section component
 */
const Hero: React.FC = (): React.JSX.Element => {
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
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Shreyash Kale</span>
            </h1>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <p className="hero-description">
              Detail-oriented and innovative software developer with a passion for problem-solving 
              and delivering high-quality end-to-end solutions. Committed to excellence in technology.
            </p>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
              <ArrowRight className="btn-icon" />
            </Link>
            <a href="/Shreyash_Kale_s_CV.pdf" className="btn btn-secondary" download>
              <Download className="btn-icon" />
              Download CV
            </a>
          </motion.div>

          <motion.div className="hero-social-links" variants={itemVariants}>
            <a 
              href="https://github.com/shreyashkale9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github-link"
              aria-label="GitHub Profile"
            >
              <Github className="social-icon" />
            </a>
            <a 
              href="https://linkedin.com/in/shreyash-kale-aa404a1b3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="social-icon" />
            </a>
            <a 
              href="mailto:shreyashkale9@gmail.com?subject=Hello from Portfolio&body=Hi Shreyash, I'd like to discuss a project with you."
              className="social-link email-link"
              aria-label="Send Email"
            >
              <Mail className="social-icon" />
            </a>
            <a 
              href="https://x.com/shreyashkale9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link twitter-link"
              aria-label="Twitter Profile"
            >
              <Twitter className="social-icon" />
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">9.49</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat">
              <span className="stat-number">10th</span>
              <span className="stat-label">University Rank</span>
            </div>
            <div className="stat">
              <span className="stat-number">AWS</span>
              <span className="stat-label">Cloud Certified</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
