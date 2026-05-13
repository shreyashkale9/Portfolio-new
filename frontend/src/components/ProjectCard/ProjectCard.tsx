import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, Eye } from 'lucide-react';
import './ProjectCard.css';

/**
 * ProjectCard component that displays individual project information
 * @param {Object} project - Project data object
 * @returns {React.JSX.Element} The project card component
 */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }): React.JSX.Element => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <div className="image-placeholder">
          <span>{project.title}</span>
        </div>
        {project.featured && (
          <div className="featured-badge">
            <Star className="star-icon" />
            Featured
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Eye className="link-icon" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github className="link-icon" />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
