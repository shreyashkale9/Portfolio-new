import React from 'react';
import { motion } from 'framer-motion';

import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectGrid.css';

/**
 * ProjectGrid component that displays filtered projects in a grid layout
 * @param {string} activeFilter - Currently active filter for projects
 * @returns {React.JSX.Element} The project grid component
 */
interface ProjectGridProps {
  activeFilter: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ activeFilter }): React.JSX.Element => {
  const projects = [
    {
      id: 1,
      title: 'Basketball Virtual Referee',
      description: 'AI-Powered Basketball Violation Detection System using computer vision and deep learning. Implemented image annotation, pose estimation, and trained models to detect double dribble and travel violations.',
      image: '/api/placeholder/400/300',
      category: 'ai-ml',
      technologies: ['Python', 'OpenCV', 'YOLOv8', 'PyTorch', 'NumPy', 'CVAT', 'LabelImg'],
      liveUrl: 'https://github.com/shreyashkale9',
      githubUrl: 'https://github.com/shreyashkale9',
      featured: true
    },
    {
      id: 2,
      title: 'Quick Kart',
      description: 'Full-stack e-commerce website with user authentication, product listings, cart management, order processing, and Braintree payment integration.',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Braintree'],
      liveUrl: 'https://github.com/shreyashkale9',
      githubUrl: 'https://github.com/shreyashkale9',
      featured: true
    },
    {
      id: 3,
      title: 'Hotel Booking App',
      description: 'Website UI with hotel exploration and reservation functionality. Built responsive pages with modern design and API integration.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['React.js', 'JavaScript', 'MongoDB', 'Express.js', 'JWT', 'SCSS'],
      liveUrl: 'https://github.com/shreyashkale9',
      githubUrl: 'https://github.com/shreyashkale9',
      featured: true
    },
    {
      id: 4,
      title: 'ThoughtCloud',
      description: 'A modern, minimal, and intuitive notes app to capture ideas, tasks, and thoughts with ease. Built with TypeScript and modern web technologies.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['TypeScript', 'React', 'Modern Web Tech', 'Notes App'],
      liveUrl: 'https://thought-cloud-frontend.vercel.app/',
      githubUrl: 'https://github.com/shreyashkale9/ThoughtCloud',
      featured: false
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Weather application with location-based forecasts and beautiful UI design. Provides real-time weather information.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['JavaScript', 'Weather API', 'CSS', 'HTML'],
      liveUrl: 'https://shreyashkale9weatherapp.netlify.app/',
      githubUrl: 'https://github.com/shreyashkale9/Weather_App',
      featured: false
    },
    {
      id: 6,
      title: 'Calculator with React',
      description: 'Modern calculator application built with React.js. Features a clean interface and mathematical operations.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['React.js', 'JavaScript', 'CSS', 'Calculator UI'],
      liveUrl: 'https://shreyashkale9calculator.netlify.app/',
      githubUrl: 'https://github.com/shreyashkale9/Calculator-With-Reactjs',
      featured: false
    },
    {
      id: 7,
      title: 'ThinkSheet',
      description: 'A minimal web app for writing and saving handwritten notes temporarily. Only one note can be saved at a time, making it distraction-free and simple for quick thoughts.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['React.js', 'JavaScript', 'CSS', 'Netlify'],
      liveUrl: 'https://thinksheet.netlify.app/',
      githubUrl: 'https://github.com/shreyashkale9/ThinkSheet',
      featured: false
    },
    {
      id: 8,
      title: 'Tic-Tac-Toe Game',
      description: 'Classic Tic-Tac-Toe game built with JavaScript. Interactive gameplay with modern UI design.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
      liveUrl: 'https://shreyashkale9tictactoe.netlify.app/',
      githubUrl: 'https://github.com/shreyashkale9/Tic-Tac-Toe',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(project => project.featured === true)
    : projects.filter(project => project.category === activeFilter);

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
    <motion.div
      className="project-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          layout
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
