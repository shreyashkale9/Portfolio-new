import React from 'react';
import { motion } from 'framer-motion';
import './ProjectFilters.css';

/**
 * ProjectFilters component for filtering projects by category
 * @param {string} activeFilter - Currently active filter
 * @param {function} onFilterChange - Function to handle filter changes
 * @returns {React.JSX.Element} The project filters component
 */
interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ 
  activeFilter, 
  onFilterChange 
}): React.JSX.Element => {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  return (
    <div className="project-filters">
      <motion.div 
        className="filters-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectFilters;
