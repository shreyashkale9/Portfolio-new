import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

/**
 * Main App component that handles routing and overall application structure
 * @returns {React.JSX.Element} The main application component
 */
function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
