import React, { useState } from 'react';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';
import ProjectFilters from '../components/ProjectFilters/ProjectFilters';
import './Projects.css';

/**
 * Projects page component that displays portfolio projects with filtering
 * @returns {React.JSX.Element} The projects page component
 */
const Projects: React.FC = (): React.JSX.Element => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-description">
            A collection of my recent work and creative projects
          </p>
        </div>
        
        <ProjectFilters 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />
        
        <ProjectGrid activeFilter={activeFilter} />
      </div>
    </div>
  );
};

export default Projects;
