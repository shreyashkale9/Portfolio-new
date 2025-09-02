import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * Layout component that provides consistent structure across all pages
 * @param {React.ReactNode} children - The content to be wrapped
 * @returns {React.JSX.Element} The layout wrapper component
 */
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): React.JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
