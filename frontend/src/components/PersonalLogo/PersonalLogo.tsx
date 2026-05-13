import React from 'react';
import './PersonalLogo.css';

/**
 * PersonalLogo component featuring custom "SK" initials design
 * @returns {React.JSX.Element} The personal logo component
 */
const PersonalLogo: React.FC = (): React.JSX.Element => {
  return (
    <div className="personal-logo">
      <div className="logo-container">
        <div className="logo-tag">
          <span className="tag-open">&lt;</span>
          <span className="tag-slash">/</span>
          <span className="tag-close">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalLogo;
