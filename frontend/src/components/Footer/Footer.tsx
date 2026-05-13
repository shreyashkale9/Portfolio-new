import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import './Footer.css';

/**
 * Footer component with social links and copyright information
 * @returns {React.JSX.Element} The footer component
 */
const Footer: React.FC = (): React.JSX.Element => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shreyashkale9', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shreyash-kale-aa404a1b3/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/shreyashkale9', label: 'Twitter' },
    { icon: Mail, href: 'mailto:shreyashkale9@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              Building amazing digital experiences with modern technologies.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon className="social-icon" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Made with <Heart className="heart-icon" /> by Shreyash Kale
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
