import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Theme interface defining the color palette structure
 */
interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  textPrimary: string;
  textSecondary: string;
  bgPrimary: string;
  bgSecondary: string;
  bgDark: string;
  borderColor: string;
  gradientPrimary: string;
  gradientSecondary: string;
}

/**
 * Available theme palettes - 6 beautiful color schemes
 */
const themes: Theme[] = [
  {
    name: 'Violet',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    textPrimary: '#1f2937',
    textSecondary: '#6b7280',
    bgPrimary: '#ffffff',
    bgSecondary: '#f9fafb',
    bgDark: '#111827',
    borderColor: '#e5e7eb',
    gradientPrimary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
  },
  {
    name: 'Emerald',
    primary: '#10b981',
    secondary: '#059669',
    accent: '#06b6d4',
    textPrimary: '#064e3b',
    textSecondary: '#047857',
    bgPrimary: '#ffffff',
    bgSecondary: '#f0fdf4',
    bgDark: '#064e3b',
    borderColor: '#d1fae5',
    gradientPrimary: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  },
  {
    name: 'Rose',
    primary: '#f43f5e',
    secondary: '#e11d48',
    accent: '#06b6d4',
    textPrimary: '#881337',
    textSecondary: '#be185d',
    bgPrimary: '#ffffff',
    bgSecondary: '#fff1f2',
    bgDark: '#881337',
    borderColor: '#fecdd3',
    gradientPrimary: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  },
  {
    name: 'Amber',
    primary: '#f59e0b',
    secondary: '#d97706',
    accent: '#06b6d4',
    textPrimary: '#92400e',
    textSecondary: '#b45309',
    bgPrimary: '#ffffff',
    bgSecondary: '#fffbeb',
    bgDark: '#92400e',
    borderColor: '#fed7aa',
    gradientPrimary: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  },
  {
    name: 'Indigo',
    primary: '#6366f1',
    secondary: '#4f46e5',
    accent: '#06b6d4',
    textPrimary: '#312e81',
    textSecondary: '#4338ca',
    bgPrimary: '#ffffff',
    bgSecondary: '#eef2ff',
    bgDark: '#312e81',
    borderColor: '#c7d2fe',
    gradientPrimary: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  },
  {
    name: 'Teal',
    primary: '#14b8a6',
    secondary: '#0d9488',
    accent: '#06b6d4',
    textPrimary: '#134e4a',
    textSecondary: '#0f766e',
    bgPrimary: '#ffffff',
    bgSecondary: '#f0fdfa',
    bgDark: '#134e4a',
    borderColor: '#ccfbf1',
    gradientPrimary: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  }
];

/**
 * Theme context interface
 */
interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  themes: Theme[];
}

/**
 * Theme context creation
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme provider component
 */
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  /**
   * Apply theme to CSS variables
   */
  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--text-primary', theme.textPrimary);
    root.style.setProperty('--text-secondary', theme.textSecondary);
    root.style.setProperty('--bg-primary', theme.bgPrimary);
    root.style.setProperty('--bg-secondary', theme.bgSecondary);
    root.style.setProperty('--bg-dark', theme.bgDark);
    root.style.setProperty('--border-color', theme.borderColor);
    root.style.setProperty('--gradient-primary', theme.gradientPrimary);
    root.style.setProperty('--gradient-secondary', theme.gradientSecondary);
  };

  /**
   * Set theme by name
   */
  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('portfolio-theme', themeName);
      applyTheme(theme);
    }
  };

  /**
   * Initialize theme from localStorage or default
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
        applyTheme(theme);
        return;
      }
    }
    applyTheme(themes[0]);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use theme context
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
