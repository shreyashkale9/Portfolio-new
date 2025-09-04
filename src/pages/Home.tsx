import React from 'react';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import HomeProjects from '../components/HomeProjects/HomeProjects';
import Experience from '../components/Experience/Experience';
import CallToAction from '../components/CallToAction/CallToAction';

/**
 * Home page component that displays the main landing content
 * @returns {React.JSX.Element} The home page component
 */
const Home: React.FC = (): React.JSX.Element => {
  return (
    <div className="home">
      <Hero />
      <Skills />
      <HomeProjects />
      <Experience />
      <CallToAction />
    </div>
  );
};

export default Home;
