import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectGrid from '../ProjectGrid/ProjectGrid';
import './HomeProjects.css';

/**
 * HomeProjects component that displays featured projects on the home page
 * @returns {React.JSX.Element} The home projects section component
 */
const HomeProjects: React.FC = (): React.JSX.Element => {

  return (
    <section className="home-projects section">
      <div className="container">
        <motion.div
          className="home-projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore some of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProjectGrid activeFilter="featured" />
        </motion.div>

        <motion.div
          className="view-all-projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/projects" className="btn btn-secondary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProjects;
