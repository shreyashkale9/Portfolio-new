import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import VirtualShreyash from './components/VirtualShreyash/VirtualShreyash'; // Import your new AI component
import FloatingCoffeeButton from './components/FloatingCoffeeButton/FloatingCoffeeButton'; 
import './App.css';

/**
 * Main App component that handles routing and overall application structure
 * @returns {React.JSX.Element} The main application component
 */
function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      {/* Added future flags to resolve React Router v7 deprecation warnings */}
      <Router 
        future={{ 
          v7_startTransition: true, 
          v7_relativeSplatPath: true 
        }}
      >
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          {/* Ensure your floating components are here so they appear on all pages */}
          <VirtualShreyash />
          <FloatingCoffeeButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;