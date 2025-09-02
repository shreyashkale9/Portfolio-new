import React from 'react';
import AboutHero from '../components/AboutHero/AboutHero';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import Education from '../components/Education/Education';
import Interests from '../components/Interests/Interests';

/**
 * About page component that displays personal information and background
 * @returns {React.JSX.Element} The about page component
 */
const About: React.FC = (): React.JSX.Element => {
  return (
    <div className="about">
      <AboutHero />
      <PersonalInfo />
      <Education />
      <Interests />
    </div>
  );
};

export default About;
