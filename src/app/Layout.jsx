// import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen app-background flex flex-col">
      {children}
    </div>
  );
};

export default Layout;
