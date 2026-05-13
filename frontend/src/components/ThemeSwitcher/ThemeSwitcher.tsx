import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeSwitcher.css';

/**
 * ThemeSwitcher component that allows users to switch between color themes
 * @returns {React.JSX.Element} The theme switcher component
 */
const ThemeSwitcher: React.FC = (): React.JSX.Element => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle theme switcher dropdown
   */
  const toggleDropdown = () => setIsOpen(!isOpen);

  /**
   * Handle theme selection
   */
  const handleThemeSelect = (themeName: string) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  /**
   * Close dropdown when clicking outside
   */
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="theme-switcher">
      <button 
        className="theme-toggle-btn"
        onClick={toggleDropdown}
        aria-label="Toggle theme switcher"
      >
        <Palette className="theme-icon" />
      </button>

      {isOpen && (
        <div className="theme-dropdown-overlay" onClick={handleClickOutside}>
          <div className="theme-dropdown">
            <div className="theme-dropdown-header">
              <h3>Choose Theme</h3>
              <span className="current-theme">Current: {currentTheme.name}</span>
            </div>
            
            <div className="theme-options">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  className={`theme-option ${currentTheme.name === theme.name ? 'active' : ''}`}
                  onClick={() => handleThemeSelect(theme.name)}
                >
                  <div className="theme-preview">
                    <div 
                      className="theme-color-preview"
                      style={{ 
                        background: theme.gradientPrimary,
                        border: `2px solid ${currentTheme.name === theme.name ? theme.primary : 'transparent'}`
                      }}
                    />
                    <div className="theme-info">
                      <span className="theme-name">{theme.name}</span>
                      <div className="theme-colors">
                        <div 
                          className="color-dot" 
                          style={{ backgroundColor: theme.primary }}
                          title="Primary"
                        />
                        <div 
                          className="color-dot" 
                          style={{ backgroundColor: theme.secondary }}
                          title="Secondary"
                        />
                        <div 
                          className="color-dot" 
                          style={{ backgroundColor: theme.accent }}
                          title="Accent"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
